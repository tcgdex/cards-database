import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Snover",
		fr: "Blizzi",
		es: "Snover",
		it: "Snover",
		pt: "Snover",
		de: "Shnebedeck"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		459,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
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
				en: "If your opponent’s Active Pokémon is a Fighting Pokémon, this attack does 40 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Fighting, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Fighting, este ataque hace 40 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è di tipo Fighting, questo attacco infligge 40 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Fighting, este ataque causará 40 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Fighting-Pokémon ist, fügt diese Attacke 40 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 315968,
		tcgplayer: 157654
	}
}

export default card
