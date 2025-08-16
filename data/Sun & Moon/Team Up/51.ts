import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Tapu Koko ◇",
		fr: "Tokorico ◇",
		es: "Tapu Koko ◇",
		it: "Tapu Koko ◇",
		pt: "Tapu Koko ◇",
		de: "Kapu-Riki ◇"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	dexId: [785],

	set: Set,

	hp: 130,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dance of the Ancients",
				fr: "Danse des Ancêtres",
				es: "Danza de los Antepasados",
				it: "Danza degli Antichi",
				pt: "Dança dos Anciões",
				de: "Uralter Tanz"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may choose 2 of your Benched Pokémon and attach a Lightning Energy card from your discard pile to each of them. If you do, discard all cards from this Pokémon and put it in the Lost Zone.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez choisir 2 de vos Pokémon de Banc et attacher une carte Énergie Lightning de votre pile de défausse à chacun d’eux. Dans ce cas, défaussez toutes les cartes attachées à ce Pokémon et placez-le dans la Zone Perdue.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu Banca, puedes elegir 2 de tus Pokémon en Banca y unirle 1 carta de Energía Lightning de tu pila de descartes a cada uno de ellos. Si lo haces, descarta todas las cartas de este Pokémon y ponlo en la Zona Perdida.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua panchina, puoi scegliere due dei tuoi Pokémon in panchina e assegnare a ognuno di essi una carta Energia Lightning dalla tua pila degli scarti. Se lo fai, scarta tutte le carte assegnate a questo Pokémon e mettilo nell’area perduta.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon estiver no seu Banco, você poderá escolher 2 dos seus Pokémon no Banco e ligar 1 carta de Energia Lightning da sua pilha de descarte a cada um deles. Se fizer isto, descarte todas as cartas deste Pokémon e coloque-o na Zona Perdida.",
				de: "Einmal während deines Zuges (bevor du angreifst), wenn sich dieses Pokémon auf deiner Bank befindet, kannst du 2 Pokémon auf deiner Bank wählen und an jedes 1 Lightning-Energiekarte aus deinem Ablagestapel anlegen. Wenn du das machst, lege alle Karten von diesem Pokémon auf deinen Ablagestapel und dieses Pokémon ins Nirgendwo."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Mach Bolt",
				fr: "Éclair Fulgurant",
				es: "Rayo Mach",
				it: "Fulmine Mach",
				pt: "Raio Supersônico",
				de: "Flotter Sprung"
			},

			damage: 120,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				fr: "Éclair Fulgurant",
			},

			damage: 120,

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
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
