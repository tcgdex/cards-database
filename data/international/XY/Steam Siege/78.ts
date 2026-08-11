import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Gardevoir EX",
		'fr-fr': "Gardevoir EX",
		'es-es': "Gardevoir EX",
		'it-it': "Gardevoir EX",
		'pt-br': "Gardevoir EX",
		'de-de': "Guardevoir EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
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
				'en-us': "Link Blast",
				'fr-fr': "Explosion en Série",
				'es-es': "Rayo Conector",
				'it-it': "Spaccalegame",
				'pt-br': "Explosão Conectada",
				'de-de': "Vereinigende Explosion"
			},
			effect: {
				'en-us': "If this Pokémon and your opponent's Active Pokémon have the same amount of Energy attached to them, this attack does 70 more damage.",
				'fr-fr': "Si ce Pokémon et le Pokémon Actif de votre adversaire ont le même nombre d'Énergies attachées, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Si este Pokémon y el Pokémon Activo de tu rival tienen el mismo número de Energías unidas a ellos, este ataque hace 70 puntos de daño más.",
				'it-it': "Se questo Pokémon e il Pokémon attivo del tuo avversario hanno la stessa quantità di Energie assegnate, questo attacco infligge 70 danni in più.",
				'pt-br': "Se este Pokémon e o Pokémon Ativo do seu oponente tiverem a mesma quantidade de Energia ligada a eles, este ataque causará 70 de danos adicionais.",
				'de-de': "Wenn an diesem Pokémon genauso viel Energie angelegt ist wie am Aktiven Pokémon deines Gegners, fügt dieser Angriff 70 weitere Schadenspunkte zu."
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
				'en-us': "Luminous Blade",
				'fr-fr': "Lame Lumineuse",
				'es-es': "Cuchilla Brillante",
				'it-it': "Lamalucente",
				'pt-br': "Lâmina Luminosa",
				'de-de': "Leuchtende Klinge"
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía unida a este Pokémon.",
				'it-it': "Scarta un'Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
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
		cardmarket: 290993,
		tcgplayer: 120154
	}
}

export default card
