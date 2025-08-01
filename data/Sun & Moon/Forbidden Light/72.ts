import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Zygarde",
		fr: "Zygarde",
		es: "Zygarde",
		it: "Zygarde",
		pt: "Zygarde",
		de: "Zygarde"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		718,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Glare",
				fr: "Regard Médusant",
				es: "Deslumbrar",
				it: "Sguardo Feroce",
				pt: "Olhar Penetrante",
				de: "Giftblick"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Calm Strike",
				fr: "Frappe Placide",
				es: "Golpe Calmado",
				it: "Colpo Impassibile",
				pt: "Golpe Calmo",
				de: "Gelassener Schlag"
			},
			effect: {
				en: "If you have used your GX attack, this attack does 60 more damage.",
				fr: "Si vous avez utilisé votre attaque GX, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si has usado tu ataque GX, este ataque hace 60 puntos de daño más.",
				it: "Se hai già usato il tuo attacco GX, questo attacco infligge 60 danni in più.",
				pt: "Se você usou seu ataque GX, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn du deine GX-Attacke eingesetzt hast, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 327207
	}
}

export default card
