import fs from 'node:fs'

import { relative } from './config'
import { serializeFix } from './report'
import type { AuditResult, FixProposal, Options, SourceEdit } from './types'

export function markScopeBlocked(result: AuditResult, options: Options) {
	const availableSets = new Set(Object.keys(result.report.sets))
	const selectedSets = options.all ? availableSets : options.sets
	const unknownSets = [...selectedSets].filter((setId) => !availableSets.has(setId))
	if (unknownSets.length > 0) throw new Error(`Unknown set ID(s): ${unknownSets.join(', ')}`)
	for (const fix of result.fixes) {
		if (fix.status !== 'proposed' || !selectedSets.has(fix.setId)) continue
		if (fix.requiredSets.some((setId) => !selectedSets.has(setId))) {
			fix.status = 'blocked-by-scope'
			fix.reason = `duplicate-group-requires-sets:${fix.requiredSets.join(',')}`
		}
	}
	result.report.fixes = result.fixes.map(serializeFix)
	result.report.summary.proposedFixes = result.fixes.filter((fix) => fix.status === 'proposed').length
	result.report.summary.manualReview = result.fixes.filter((fix) => fix.status !== 'proposed').length
	for (const summary of Object.values(result.report.sets)) {
		summary.proposedFixes = 0
		summary.manualReview = 0
	}
	for (const fix of result.fixes) {
		const summary = result.report.sets[fix.setId]
		if (fix.status === 'proposed') summary.proposedFixes++
		else summary.manualReview++
	}
	const fixesByKey = new Map(result.fixes.map((fix) => [fix.key, fix]))
	result.report.links = result.report.links.map((link) => {
		const fix = fixesByKey.get(link.key)
		return {
			...link,
			proposedId: fix?.proposedId,
			fixStatus: fix?.status
		}
	})
}

export function findSelectedCollisions(result: AuditResult, selectedFixes: FixProposal[]): number[] {
	const proposedIds = new Set(selectedFixes.flatMap((fix) => fix.proposedId === undefined ? [] : [fix.proposedId]))
	const finalByKey = new Map<string, { idProduct: number; code: string }>()
	for (const entry of result.references) {
		finalByKey.set(entry.key, { idProduct: entry.reference.idProduct, code: entry.card.code })
	}
	for (const fix of selectedFixes) {
		if (fix.proposedId === undefined) continue
		finalByKey.set(fix.key, { idProduct: fix.proposedId, code: fix.code })
	}
	const ownersByProduct = new Map<number, Set<string>>()
	for (const owner of finalByKey.values()) {
		const owners = ownersByProduct.get(owner.idProduct) ?? new Set<string>()
		owners.add(owner.code)
		ownersByProduct.set(owner.idProduct, owners)
	}
	return [...ownersByProduct.entries()]
		.filter(([idProduct]) => proposedIds.has(idProduct))
		.filter(([, owners]) => owners.size > 1)
		.map(([idProduct]) => idProduct)
}

function assertNoSelectedCollisions(result: AuditResult, selectedFixes: FixProposal[]) {
	const collisions = findSelectedCollisions(result, selectedFixes)
	if (collisions.length > 0) throw new Error(`Selected fixes would leave duplicate Cardmarket IDs: ${collisions.join(', ')}`)
}

export function applyFixes(result: AuditResult, options: Options): number {
	const selectedSets = options.all ? new Set(Object.keys(result.report.sets)) : options.sets
	const selectedFixes = result.fixes.filter((fix) => fix.status === 'proposed' && selectedSets.has(fix.setId))
	if (selectedFixes.length === 0) throw new Error('No safe fixes are available for the selected scope')
	assertNoSelectedCollisions(result, selectedFixes)
	const editsByFile = new Map<string, SourceEdit[]>()
	for (const fix of selectedFixes) {
		const edits = editsByFile.get(fix.file) ?? []
		edits.push(fix.edit)
		editsByFile.set(fix.file, edits)
	}
	for (const [file, edits] of editsByFile) {
		const card = [...result.cards.values()].find((entry) => relative(entry.filePath) === file)
		if (!card) throw new Error(`Could not load ${file}`)
		let updated = card.source
		for (const edit of edits.sort((left, right) => right.start - left.start)) {
			if (updated.slice(edit.start, edit.end) !== card.source.slice(edit.start, edit.end)) throw new Error(`Source changed while applying ${file}`)
			updated = `${updated.slice(0, edit.start)}${edit.replacement}${updated.slice(edit.end)}`
		}
		if (updated !== card.source) fs.writeFileSync(card.filePath, updated)
	}
	return editsByFile.size
}
