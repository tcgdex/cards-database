import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Ditto",
		fr: "Metamorph",
		de: "Ditto"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		132,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Transform",
				fr: "Transformation",
				de: "Wandler"
			},
			effect: {
				en: "If Ditto is your Active Pokémon, treat it as if it were the same card as the Defending Pokémon, including type, Hit Points, Weakness, and so on, except Ditto can't evolve, always has this Pokémon Power, and you may treat any Energy attached to Ditto as Energy of any type. Ditto isn't a copy of any other Pokémon while Ditto is Asleep, Confused, or Paralyzed.",
				fr: "Si Metamorph est votre Pokémon Actif, considérez-le comme s'il était la même carte que le Pokémon Défenseur, y compris le type, les Points de Vie, la Faiblesse, etc., à l'exception que Metamorph ne peut pas évoluer, qu'il conserve toujours ce Pouvoir Pokémon, et que vous pouvez considérer toute Énergie attachée à Metamorph comme une Énergie de n'importe quel type. Metamorph n'est la copie d'aucun Pokémon lorsque Metamorph est Endormi, Confus ou Paralysé.",
				de: "Falls Ditto dein aktives Pokémon ist, behandle es genauso wie die Karte des verteidigenden Pokémon, einschließlich Typ, Kraftpunkte, Schwäche u.s.w., außer dass Ditto sich nicht entwickeln lässt, diese Pokémon-Power immer hat und jede auf Ditto abgelegte Energiekarte als Energie jeder beliebigen Art behandelt wrerden darf. Ditto ist kein Abbild eines anderen Pokémon, während Ditto schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Il est capable de copier le code génétique d'un ennemi pour se transformer en son double."
	}
}

export default card
