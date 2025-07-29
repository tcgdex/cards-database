import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Gardevoir EX",
		fr: "Gardevoir EX",
		es: "Gardevoir EX",
		it: "Gardevoir EX",
		pt: "Gardevoir EX",
		de: "Guardevoir EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 170,

	types: [
		"Fairy",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Link Blast",
				fr: "Explosion en série",
				es: "Rayo Conector",
				it: "Spaccalegame",
				pt: "Explosão Conectada",
				de: "Vereinigende Explosion"
			},
			effect: {
				en: "If this Pokémon and your opponent's Active Pokémon have the same amount of Energy attached to them, this attack does 70 more damage.",
				fr: "Si ce Pokémon et le Pokémon Actif de votre adversaire ont le même nombre d'Énergies attachées, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si este Pokémon y el Pokémon Activo de tu rival tienen el mismo número de Energías unidas a ellos, este ataque hace 70 puntos de daño más.",
				it: "Se questo Pokémon e il Pokémon attivo del tuo avversario hanno la stessa quantità di Energie assegnate, questo attacco infligge 70 danni in più.",
				pt: "Se este Pokémon e o Pokémon Ativo do seu oponente tiverem a mesma quantidade de Energia ligada a eles, este ataque causará 70 de danos adicionais.",
				de: "Wenn an diesem Pokémon genauso viel Energie angelegt ist wie am Aktiven Pokémon deines Gegners, fügt dieser Angriff 70 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Luminous Blade",
				fr: "Lame Lumineuse",
				es: "Cuchilla Brillante",
				it: "Lamalucente",
				pt: "Lâmina Luminosa",
				de: "Leuchtende Klinge"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				es: "Descarta 1 Energía unida a este Pokémon.",
				it: "Scarta un'Energia assegnata a questo Pokémon.",
				pt: "Descarte uma Energia ligada a este Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 290993
	}
}

export default card
