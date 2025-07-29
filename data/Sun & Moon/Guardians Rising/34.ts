import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Vanillish",
		fr: "Sorboul",
		es: "Vanillish",
		it: "Vanillish",
		pt: "Vanillish",
		de: "Gelatroppo"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		583,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Vanillite",
		fr: "Sorbébé",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Ice Shard",
				fr: "Éclats Glace",
				es: "Canto Helado",
				it: "Geloscheggia",
				pt: "Caco de Gelo",
				de: "Eissplitter"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Fighting Pokémon, this attack does 30 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Fighting, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Fighting, este ataque hace 30 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è di tipo Fighting, questo attacco infligge 30 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Fighting, este ataque causará 30 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Fighting-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 297496
	}
}

export default card
