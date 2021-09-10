import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Sigilyph",
		fr: "Cryptéro",
		es: "Sigilyph",
		it: "Sigilyph",
		pt: "Sigilyph",
		de: "Symvolara"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		561,
	],
	hp: 90,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Toolbox",
				fr: "Boîte à Outils",
				es: "Caja de Herramientas",
				it: "Portaoggetti",
				pt: "Caixa de Ferramentas",
				de: "Ausrüstungskiste"
			},
			effect: {
				en: "This Pokémon may have up to 4 Pokémon Tool cards attached to it. (If this Pokémon loses this Ability, discard Pokémon Tool cards attached to this Pokémon until only 1 Pokémon Tool card remains.)",
				fr: "Jusqu’à 4 cartes Outil Pokémon peuvent être attachées à ce Pokémon. (Si ce Pokémon perd cette capacité spéciale, défaussez des cartes Outil Pokémon attachées à ce Pokémon jusqu’à ce qu’il ne lui reste qu’une seule carte Outil Pokémon.)",
				es: "Este Pokémon puede tener hasta 4 cartas de Herramienta Pokémon unidas a él. (Si este Pokémon pierde esta habilidad, descarta cartas de Herramienta Pokémon unidas a este Pokémon hasta que solo quede 1 carta de Herramienta Pokémon.)",
				it: "Questo Pokémon può avere fino a quattro carte Oggetto Pokémon assegnate (se perde questa abilità, scarta le carte Oggetto Pokémon assegnategli finché ne resta solo una).",
				pt: "Este Pokémon pode possuir até 4 cards de Ferramenta Pokémon ligados a ele. (Se este Pokémon perder esta Habilidade, descarte cards de Ferramenta Pokémon ligados a este Pokémon até que sobre apenas 1 card de Ferramente Pokémon.)",
				de: "An dieses Pokémon können bis zu 4 Pokémon-Ausrüstungen angelegt sein. (Wenn dieses Pokémon diese Fähigkeit verliert, lege so lang Pokémon-Ausrüstungen, die an dieses Pokémon angelegt sind, auf deinen Ablagestapel, bis 1 Pokémon-Ausrüstung übrig bleibt.)"
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cutting Wind",
				fr: "Vent Glacial",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
