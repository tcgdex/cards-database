import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Pangoro",
		'fr-fr': "Pandarbare",
		'es-es': "Pangoro",
		'it-it': "Pangoro",
		'pt-br': "Pangoro",
		'de-de': "Pandagro"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		675,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
		'es-es': "Pancham",
		'it-it': "Pancham",
		'pt-br': "Pancham",
		'de-de': "Pam-Pam"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Clobber",
				'fr-fr': "Tabassage",
				'es-es': "Aporreo",
				'it-it': "Mazzata",
				'pt-br': "Esmagar",
				'de-de': "Vermöbeln"
			},
			effect: {
				'en-us': "You may discard an Item card from your hand. If you do, this attack does 40 more damage.",
				'fr-fr': "Vous pouvez défausser une carte Objet de votre main. Dans ce cas, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Puedes descartar 1 carta de Objeto de tu mano. Si lo haces, este ataque hace 40 puntos de daño más.",
				'it-it': "Puoi scartare una carta Strumento dalla tua mano. Se lo fai, questo attacco infligge 40 danni in più.",
				'pt-br': "Você pode descartar um card de Item da sua mão. Se fizer isso, esse ataque causará 40 de danos adicionais.",
				'de-de': "Du kannst 1 Itemkarte von deiner Hand auf den Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hammer Arm",
				'fr-fr': "Marto-Poing",
				'es-es': "Machada",
				'it-it': "Martelpugno",
				'pt-br': "Braço de Martelo",
				'de-de': "Hammerarm"
			},
			effect: {
				'en-us': "Discard the top card of your opponent's deck.",
				'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
				'es-es': "Descarta la primera carta de la baraja de tu rival.",
				'it-it': "Scarta la carta in cima al mazzo del tuo avversario.",
				'pt-br': "Descarte o card de cima do baralho do seu oponente.",
				'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},
			damage: 80,

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
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Although it possesses a violent temperament, it won't put up with bullying. It uses the leaf in its mouth to sense the movements of its enemies.",
	},

	thirdParty: {
		cardmarket: 281732,
		tcgplayer: 92245
	}
}

export default card
