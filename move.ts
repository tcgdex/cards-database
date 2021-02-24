import fs from 'fs/promises'
import OldCard from '@tcgdex/sdk/interfaces/Card'
import { Card, Languages, Serie, Set, Types } from './interfaces'
import { objectKeys } from '@dzeio/object-util'

function getRarity(n: number): Card["rarity"] {
	switch (n) {
		case 0:
			return 'None'
		case 1:
		default:
			return 'Common'
		case 2:
			return 'Uncommon'
		case 3:
			return 'Rare'
		case 4:
			return 'Ultra Rare'
		case 5:
			return 'Secret Rare'
	}
}

function getCateogry(n: number): Card['category'] {
	switch (n) {
		case 0:
		default:
			return 'Pokemon'
		case 1:
			return 'Trainer'
		case 2:
			return 'Energy'
	}
}

function getType(n: number): Types {
	switch (n) {
		case 0: return 'Colorless'
		case 1: return 'Darkness'
		case 2: return 'Dragon'
		case 3: return 'Fairy'
		case 4: return 'Fightning'
		case 5: return 'Fire'
		case 6: return 'Grass'
		case 7: return 'Lightning'
		case 8: return 'Metal'
		case 9: return 'Psychic'
		case 10: return 'Water'
	}
}

const stages = [0,2,7,8,9,14,15,21]
function getStage(n: number): Card['stage'] {
	switch (n) {
		case 0: return 'Basic'
		case 2: return 'BREAK'
		case 7: return 'LEVEL-UP'
		case 8: return 'MEGA'
		case 9: return 'RESTORED'
		case 14: return 'Stage1'
		case 15: return 'Stage2'
		case 21: return 'VMAX'
	}
}

function findStage(items: Array<number> | undefined): Card['stage'] | undefined {
	let largest = undefined
	if (items === undefined) {return undefined}
	for (const n of items) {
		if ((!largest || largest < n) && stages.includes(n)) {
			largest = n
		}
	}
	if (typeof largest !== 'number') {
		return undefined
	}
	return getStage(largest)
}

const suffix = [3,4,6,11,17,20,25]
function getSuffix(n: number): Card['suffix'] {
	switch (n) {
		case 3: return 'EX'
		case 4: return 'GX'
		case 20: return 'V'
		case 6: return 'Legend'
		case 25: return 'Prime'
		case 11: return 'SP'
		case 17: return 'TAG TEAM-GX'
	}
}

function findSuffix(items: Array<number> | undefined): Card['suffix'] | undefined {
	let largest = undefined
	if (items === undefined) {return undefined}
	for (const n of items) {
		if ((!largest || largest < n) && suffix.includes(n)) {
			largest = n
		}
	}
	if (typeof largest !== 'number') {
		return undefined
	}
	return getSuffix(largest)
}

const trainerTypes = [5,13,16,10,18,19]
function getTrainerTypes(n: number): Card['trainerType'] {
	switch (n) {
		case 16: return 'Supporter'
		case 5: return 'Item'
		case 13: return 'Stadium'
		case 19: return 'Tool'
		case 18: return 'Technical Machine'
		case 10: return 'Rocket\'s Secret Machine'
	}
}

function findTrainerTypes(items: Array<number> | undefined): Card['trainerType'] | undefined {
	let largest = undefined
	if (items === undefined) {return undefined}
	for (const n of items) {
		if ((!largest || largest < n) && trainerTypes.includes(n)) {
			largest = n
		}
	}
	if (typeof largest !== 'number') {
		return undefined
	}
	return getTrainerTypes(largest)
}

function getAbilityType(n: number): Card['abilities'][0]['type'] {
	switch (n) {
		case 0: return 'Poke-BODY'
		case 1: return 'Poke-POWER'
		case 2: return 'Ability'
		case 3: return 'Ancient Trait'
	}
}

export const abilityParser = (el: Card['abilities'][0], tab: string): string => {
	return `{
${tab}\ttype: ${formatElement(el.type)},
${LangListToString('name', el.name, tab)}
${LangListToString('effect', el.effect, tab)}
${tab}}`
}

export const attackParser = (el: Card['attacks'][0], tab: string): string => {
	return `{
${arrayToString('cost', el.cost, undefined, tab)}
${LangListToString('name', el.name, tab)}
${LangListToString('effect', el.effect, tab)}
${objectToString('damage', el.damage, undefined, tab)}
${tab}}`
}

export const weakStanceParser = (el: Card['weaknesses'][0] | Card['resistances'][0], tab: string): string => {
	return `{
${tab}\ttype: ${formatElement(el.type)},
${el.value ? `${tab}\tvalue: ${formatElement(el.value)}` : ''}
${tab}}`
}

function escapeString(str: string): string {
	return str.replace(/"/g, "\\\"").replace(/\n/g, "\\n")
}

const formatElement = (el: any): string => typeof el === "string" ? `"${escapeString(el)}"` : `${el}`

export function objectToString(key: string, value: any|undefined, customParser?: (item: any) => string, offset?: string): string {
	if (!value && value !== 0) {
		return ''
	}
	if (customParser) {
		return `${offset || ''}	${key}: ${customParser(value)}, \n`
	}
	return `${offset || ''}	${key}: ${formatElement(value)},\n`
}

function LangListToString<T = string>(key: string|undefined, value: Languages<T> | undefined, baseIndent?: string): string {
	if (value === undefined || objectKeys(value).length === 0) {
		return ''
	}
	let a = `${baseIndent || ''}	${key ? `${key}: {\n` : ''}`
		for (const lang in value) {
			if (!value.hasOwnProperty(lang)) {
				continue
			}

			// @ts-ignore
			const element = value[lang]
			a += `${baseIndent || ''}		${lang}: ${formatElement(element)},\n`
		}
	a+= `${baseIndent || ''}	},`
	return a
}

export function arrayToString<T>(key: string, arr: Array<T>|undefined, customParser?: (item: T, tab: string) => string, offset?: string): string {
	if (arr === undefined || arr.reduce((p, c) => c !== undefined ? false : p, true)) {
		return ''
	}
	let a = `${offset || ''}	${key}: [\n`
		for (const item of arr) {
			let val = formatElement(item)
			if (customParser) val = customParser(item, '\t\t')
			a += `${offset || ''}		${val},\n`
		}
	a+= `${offset || ''}	],`
	return a
}

const buildFile = (card: Card) => {

	return `import { Card } from '../../../interfaces'
import Set from '../${card.set.name.en.replace('\'', '\\\'')}'

const card: Card = {
${LangListToString('name', card.name)}
	illustrator: ${formatElement(card.illustrator)},
	rarity: ${formatElement(card.rarity)},
	category: ${formatElement(card.category)},
${objectToString('variants', card.variants)}
	set: Set,
${arrayToString('dexId', card.dexId)}
${card.hp ? `\thp: ${card.hp},` : ''}
${arrayToString('types', card.types)}
${LangListToString('evolveFrom', card.evolveFrom)}
${card.stage ? `\tstage: ${formatElement(card.stage)},` : ''}
${card.suffix ? `\tsuffix: ${formatElement(card.suffix)},` : ''}
${arrayToString('abilities', card.abilities, abilityParser)}
${arrayToString('attacks', card.attacks, attackParser)}
${arrayToString('weaknesses', card.weaknesses, weakStanceParser)}
${arrayToString('resistances', card.resistances, weakStanceParser)}
${card.retreat ? `\tretreat: ${formatElement(card.retreat)},` : ''}
${LangListToString('effect', card.effect)}
${card.trainerType ? `\ttrainerType: ${formatElement(card.trainerType)},` : ''}
${card.energyType ? `\energyType: ${formatElement(card.energyType)},` : ''}
}

export default card
`
}

// const Serie = 'Base'

;(async () => {
	const Series = (await fs.readdir('./data')).filter((f) => f.endsWith('.ts')).map((f) => f.replace('.ts', ''))
	for (const Serie of Series) {
		// if (Serie !== 'XY') {continue}
		const sets = (await fs.readdir(`./data/${Serie}`)).filter((f) => f.endsWith('.ts'))
		const serie: Serie = (await import(`./data/${Serie.replace('.ts', '')}`)).default
		console.group('Processing Serie', serie.name.en, serie.id)
		for (const setFile of sets) {
			// if (setFile !== 'Evolutions.ts') {continue}
			const set: Set = (await import(`./data/${Serie}/${setFile.replace('.ts', '')}`)).default
			console.group('Processing set', set.name.en, set.id)
			try {

				const files = (await fs.readdir(`./cards/${serie.id}/${set.id}`)).filter((f) => f.endsWith('.ts'))
				for (const file of files) {
					const name = file.substr(file.lastIndexOf('/') + 1)
					// if (name !== '112.ts') {continue}
					const old: OldCard = (await import(`./cards/${serie.id}/${set.id}/${file.replace('.ts', '')}`)).default
					// console.log('Processing Card', old.localId)
					try {
						const card: Card = {
							set,
							name: old.name,
							illustrator: old.illustrator,
							rarity: getRarity(old.rarity),
							category: getCateogry(old.category),
							variants: old.cardTypes,
							dexId: [old.dexId],
							hp: old.hp,
							types: old.type ? old.type.map(getType) : undefined,
							evolveFrom: old.evolveFrom,
							stage: findStage(old.tags),
							suffix: findSuffix(old.tags),
							item: old.item,
							abilities: old.abilities?.map((ab) => ({name: ab.name, effect: ab.text, type: getAbilityType(ab.type)})),
							attacks: getCateogry(old.category) === 'Pokemon' ? (old.attacks || []).filter((at) => Object.keys(at.name).length).map((at) => ({name: at.name, effect: at.text, damage: at.damage, cost: at.cost?.map(getType)})) : undefined,
							weaknesses: old.weaknesses?.map((weak) => ({value: weak.value, type: getType(weak.type)})),
							resistances: old.resistances?.map((weak) => ({value: weak.value, type: getType(weak.type)})),
							retreat: old.retreat,

							effect: getCateogry(old.category) !== 'Pokemon' ? old.effect ?? (old.attacks && old.attacks[0] ? old.attacks[0].text : undefined) : undefined,
							trainerType: findTrainerTypes(old.tags),
							energyType: (old.tags || []).includes(12) ? 'Special' : old.category === 2 ? 'Normal' : undefined
						}
						// console.log(card, buildFile(card))
						const folder = `./data/${Serie}/${set.name.en}`
						await fs.mkdir(folder, {recursive: true})
						await fs.writeFile(`${folder}/${name}`, buildFile(card))
					} catch (e) {
						console.log(e)
						console.warn('Unable to process Card', old.id)
					}
					// break
				}
			} catch (e) {
				// console.log(e)
				console.warn('Set contains no cards')
			}
			console.groupEnd()
			// break
		}
		console.groupEnd()
	}
})()
