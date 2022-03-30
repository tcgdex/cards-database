import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Pangoro",
		fr: "Pandarbare",
		es: "Pangoro",
		it: "Pangoro",
		pt: "Pangoro",
		de: "Pandagro"
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
		en: "Pancham",
		fr: "Pandespiègle",
		es: "Pancham",
		it: "Pancham",
		pt: "Pancham",
		de: "Pam-Pam"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Clobber",
				fr: "Tabassage",
				es: "Aporreo",
				it: "Mazzata",
				pt: "Esmagar",
				de: "Vermöbeln"
			},
			effect: {
				en: "You may discard an Item card from your hand. If you do, this attack does 40 more damage.",
				fr: "Vous pouvez défausser une carte Objet de votre main. Dans ce cas, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Puedes descartar 1 carta de Objeto de tu mano. Si lo haces, este ataque hace 40 puntos de daño más.",
				it: "Puoi scartare una carta Strumento dalla tua mano. Se lo fai, questo attacco infligge 40 danni in più.",
				pt: "Você pode descartar um card de Item da sua mão. Se fizer isso, esse ataque causará 40 de danos adicionais.",
				de: "Du kannst 1 Itemkarte von deiner Hand auf den Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 40 weitere Schadenspunkte zu."
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
				en: "Hammer Arm",
				fr: "Marto-Poing",
				es: "Machada",
				it: "Martelpugno",
				pt: "Braço de Martelo",
				de: "Hammerarm"
			},
			effect: {
				en: "Discard the top card of your opponent's deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire.",
				es: "Descarta la primera carta de la baraja de tu rival.",
				it: "Scarta la carta in cima al mazzo del tuo avversario.",
				pt: "Descarte o card de cima do baralho do seu oponente.",
				de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
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



}

export default card
