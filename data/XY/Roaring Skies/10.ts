import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Ninjask",
		fr: "Ninjask",
		es: "Ninjask",
		it: "Ninjask",
		pt: "Ninjask",
		de: "Ninjask"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		291,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
		es: "Nincada",
		it: "Nincada",
		pt: "Nincada",
		de: "Nincada"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wing Buzz",
				fr: "Bourdonnement d'Aile",
				es: "Zumbido de Alas",
				it: "Vibrala",
				pt: "Zumbido de Asa",
				de: "Flügelsummen"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may discard a card from your hand. If you do, discard the top card of your opponent's deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez défausser une carte de votre main. Dans ce cas, défaussez la carte du dessus du deck de votre adversaire.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon es tu Pokémon Activo, puedes descartar 1 carta de tu mano. Si lo haces, descarta la primera carta de la baraja de tu rival.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è il tuo Pokémon attivo, puoi scartare una delle carte che hai in mano. Se lo fai, scarta la carta in cima al mazzo del tuo avversario.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon for o seu Pokémon Ativo, você poderá descartar um card da sua mão. Se fizer isso, descarte o card de cima do baralho do seu oponente.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn dieses Pokémon dein Aktives Pokémon ist, 1 Karte von deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Afterimage Assault",
				fr: "Attaque Invisible",
				es: "Asalto de Recuerdo",
				it: "Assalto Alterimmagine",
				pt: "Ataque Remanescente",
				de: "Nachbild-Ansturm"
			},
			effect: {
				en: "Search your deck for up to 2 Ninjask and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 2 Ninjask dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 Ninjask y ponlos en tu Banca. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo fino a due Ninjask e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho até 2 Ninjask e coloque-os no seu Banco. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach bis zu 2 Ninjask und lege sie auf deine Bank. Mische anschließend dein Deck."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 282678
	}
}

export default card
