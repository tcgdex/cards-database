import { ArrayExpression, Identifier, JSCodeshift, Literal, ObjectExpression, Property, Transform } from "jscodeshift"
import pathUtils from 'path/posix'
interface ObjectField {
	type: 'Object'
	items: Record<string, Field>
	item: ObjectExpression
}

interface EndField {
	type: 'Literal'
	item: Literal
}

interface ArrayField {
	type: 'Array'
	items: Array<Field>
	item: ArrayExpression
}

type Field = ObjectField | EndField | ArrayField
type Possible = ObjectExpression | ArrayExpression | Literal

function processItem(value: Possible): Field {

	if (value.type === 'ObjectExpression') {
		return simplify(value)
	} else if (value.type === 'ArrayExpression') {
		const field: Field = {
			type: 'Array',
			items: [],
			item: value
		}
		value.elements.forEach((it) => {
			field.items.push(processItem(it as Possible))
		})
		return field
	} else {
		return {
			type: 'Literal',
			item: value
		}
	}
}

function simplify(base: ObjectExpression): ObjectField {
	const list: ObjectField['items'] = {}
	base.properties.forEach((it) => {
		const item = it as Property
		const key = (item.key as Identifier).name
		list[key] = processItem(item.value as Possible)
	})
	return {
		type: 'Object',
		items: list,
		item: base
	}
}

function exists(path: ObjectExpression | ArrayExpression, key: string | number) {
	if (path.type === 'ObjectExpression') {
		path.properties.forEach((p) => {
			const prop = p as Property
			if ((prop.key as Identifier).name === (key + '')) {
				return true
			}
		})
		return false
	} else {

	}
}

function set(j: JSCodeshift, path: ObjectExpression | ArrayExpression, value: Possible, key: string | number, options?: {override?: boolean}) {

	let exists = false
	if (path.type === 'ObjectExpression') {
		path.properties.forEach((p) => {
			const prop = p as Property
			if ((prop.key as Identifier).name === (key + '')) {
				exists = true
				if (!options?.override) {
					console.warn('Property already exist, add the option override to change it')
					return
				}
				prop.value = value
			}
		})
		if (exists) {return}

		if (key.toString().includes('-')) {
			key = `'${key.toString()}'`
		}

		path.properties.push(j.property('init', j.identifier(key + ''), value))
	} else {

	}
}

function remove(path: ObjectExpression | ArrayExpression, key: string | number) {
	if (path.type === 'ObjectExpression') {
		const index = path.properties.findIndex((p) => ((p as Property).key as Identifier).name === (key + ''))
		if (index === -1) {
			return
		}
		path.properties.splice(index)
	} else {

	}
}

const changes = {
	"BW Black Star Promos": "BWP",
	"Base Set 2": "B2",
	"Fossil": "FO",
	"Jungle": "JU",
	"Team Rocket": "RO",
	"Diamond & Pearl": "DP",
	"DP Black Star Promos": "",
	"Mysterious Treasures": "MT",
	"Secret Wonders": "SW",
	"Great Encounters": "GE",
	"Majestic Dawn": "MD",
	"Legends Awakened": "LA",
	"Stormfront": "FS",
	"Rumble": "RM",
	"Arceus": "AR",
	"Supreme Victors": "SV",
	"Rising Rivals": "RR",
	"POP Series 9": "P9",
	"POP Series 8": "P8",
	"POP Series 7": "P7",
	"POP Series 6": "P6",
	"POP Series 5": "P5",
	"POP Series 4": "P4",
	"POP Series 3": "P3",
	"POP Series 2": "P2",
	"POP Series 1": "P1",
	"Platinum": "PL",
	"HeartGold SoulSilver": "HS",
	"Unleashed": "UL",
	"Gym Challenge": "G2",
	"Gym Heroes": "G1",
	"Neo Destiny": "N4",
	"Neo Revelation": "N3",
	"Neo Discovery": "N2",
	"Neo Genesis": "N1",
	"Skyridge": "SK",
	"Aquapolis": "AQ",
	"Expedition Base Set": "EX",
	"Power Keepers": "PK",
	"Dragon Frontiers": "DF",
	"Crystal Guardians": "CG",
	"Holon Phantoms": "HP",
	"EX Trainer Kit—Plusle": "TK2P",
	"EX Trainer Kit—Minun": "TK2M",
	"Legend Maker": "LM",
	"Delta Species": "DS",
	"Unseen Forces": "UF",
	"Emerald": "EM",
	"Deoxys": "DX",
	"Team Rocket Returns": "TR",
	"FireRed & LeafGreen": "RG",
	"Hidden Legends": "HL",
	"EX Trainer Kit—Latios": "TK1O",
	"EX Trainer Kit—Latias": "TK1A",
	"Team Magma vs Team Aqua": "MA",
	"Dragon": "DR",
	"Sandstorm": "SS",
	"Ruby & Sapphire": "RS",
	"Legendary Collection": "LC",
	"Macdonald's Collection 2022": "MCD22",
	"Macdonald's Collection 2021": "MCD21",
	"Macdonald's Collection 2019": "MCD19",
	"Macdonald's Collection 2018": "MCD18",
	"Macdonald's Collection 2017": "MCD17",
	"Macdonald's Collection 2016": "MCD16",
	"Macdonald's Collection 2015": "MCD15",
	"Macdonald's Collection 2014": "MCD14",
	"Macdonald's Collection 2012": "MCD12",
	"Macdonald's Collection 2011": "MCD11",
	"Southern Islands": "SI",
	"Pokémon Rumble": "RM",
	"Champion's Path": "CPA",
	"Pokémon Futsal 2020": "FUT20",
	"SM trainer Kit (Lycanroc)": "TK10L",
	"SM trainer Kit (Alolan Raichu)": "TK10A",
	"XY trainer Kit (Suicune)": "TK9S",
	"XY trainer Kit (Pikachu Libre)": "TK9P",
	"XY trainer Kit (Latios)": "TK8O",
	"XY trainer Kit (Latias)": "TK8A",
	"XY trainer Kit (Wigglytuff)": "TK7B",
	"XY trainer Kit (Bisharp)": "TK7A",
	"XY trainer Kit (Sylveon)": "TK6S",
	"XY trainer Kit (Noivern)": "TK6N",
	"HS trainer Kit (Zoroark)": "TK5Z",
	"HS trainer Kit (Excadrill)": "TK5E",
	"HS trainer Kit (Raichu)": "TK4R",
	"HS trainer Kit (Gyarados)": "TK4G",
	"DP trainer Kit (Manaphy)": "TK3M",
	"DP trainer Kit (Lucario)": "TK3L",
	"EX trainer Kit 2 (Plusle)": "TK2P",
	"EX trainer Kit 2 (Ninun)": "TK2M",
	"EX trainer Kit (Latios)": "TK1O",
	"EX trainer Kit (Latias)": "TK1A",
}


/**
 * Start editing here !
 */
const transformer: Transform = (file, api) => {
	const j = api.jscodeshift

	const root = j(file.source)
	return root
		.find(j.ObjectExpression)
		.forEach((path, index) => {
			if (index !== 0) return
			const filename = pathUtils.basename(file.path, '.ts')
			let simplified = simplify(path.node)

			const abbr = changes[filename]

			if (!abbr) {
				return
			}

			set(j, simplified.item, j.objectExpression([j.property('init', j.identifier('official'), j.literal(abbr))]), 'abbrevation')
			// set(j, simplified.item, j.literal('a'), 's.official')

			// Example remove field
			// remove(name.item as ObjectExpression, 'fr')

			// Example Set/Add regulationMArk to cards
			// set(j, name.items.fr, j.literal('D'), 'regulationMark')

		})
		.toSource({useTabs: true, lineTerminator: '\n'}).replace(/    /g, '	')
}

module.exports = transformer
module.exports.parser = 'ts'
