import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
		es: "Chandelure",
		it: "Chandelure",
		pt: "Chandelure",
		de: "Skelabra"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		609,
	],
	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flare Navigate",
				fr: "Navigation Flamboyante",
				es: "Llama Errante",
				it: "Navigafiamma",
				pt: "Navegação por Chamas",
				de: "Dämmersuche"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Fire Energy card and attach it to 1 of your Pokémon. If you do, put 1 damage counter on that Pokémon. Shuffle your deck afterward.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte Énergie Fire dans votre deck et l'attacher à 1 de vos Pokémon. Dans ce cas, placez 1 marqueur de dégâts sur le Pokémon auquel l'Énergie a été attachée. Mélangez ensuite votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja una carta de Energía Fire y unirla a 1 de tus Pokémon. Si lo haces, pon 1 contador de daño en ese Pokémon. Baraja las cartas de tu baraja después.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo una carta Energia Fire e assegnarla a uno dei tuoi Pokémon. Se lo fai, aggiungi un segnalino danno al Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode procurar um card de Energia Fire em seu baralho e ligá-lo a 1 de seus Pokémon. Se fizer isso, coloque 1 marcador de dano nesse Pokémon. Em seguida, embaralhe seus cards.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach 1 Fire-Energiekarte durchsuchen und sie an 1 deiner Pokémon anlegen. Wenn du das machst, lege 1 Schadensmarke auf dieses Pokémon. Mische anschließend dein Deck."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Absorb Life",
				fr: "Absorption",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
