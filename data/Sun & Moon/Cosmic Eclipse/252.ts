import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Volcarona-GX",
		fr: "Pyrax-GX",
		es: "Volcarona-GX",
		it: "Volcarona-GX",
		pt: "Volcarona-GX",
		de: "Ramoth-GX"
	},
	illustrator: "PLANETA Tsuji",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		637,
	],
	hp: 210,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille",
	},
	stage: "Stage1",
	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flaming Shot",
				fr: "Tir Enflammé",
				es: "Disparo Llameante",
				it: "Colpo Fiammeggiante",
				pt: "Disparo Flamejante",
				de: "Feuerschuss"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a Fire Energy card from your hand. If you do, put 2 damage counters on 1 of your opponent’s Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie Fire de votre main. Dans ce cas, placez 2 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 carta de Energía Fire de tu mano. Si lo haces, pon 2 contadores de daño en 1 de los Pokémon de tu rival.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare una carta Energia Fire che hai in mano. Se lo fai, metti due segnalini danno su uno dei Pokémon del tuo avversario.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode descartar 1 carta de Energia Fire da sua mão. Se fizer isto, coloque 2 contadores de dano em 1 dos Pokémon do seu oponente.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Fire-Energiekarte aus deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, lege 2 Schadensmarken auf 1 Pokémon deines Gegners."
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
				en: "Backfire",
				fr: "Retour de Feu",
				es: "Devolución Fogosa",
				it: "Fiammata di Ritorno",
				pt: "Saindo Pela Culatra",
				de: "Rückzündung"
			},
			effect: {
				en: "Put 2 Fire Energy attached to this Pokémon into your hand.",
				fr: "Placez 2 Énergies Fire attachées à ce Pokémon dans votre main.",
				es: "Pon 2 Energías Fire unidas a este Pokémon en tu mano.",
				it: "Prendi due Energie Fire assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
				pt: "Coloque 2 cartas de Energia Fire ligadas a este Pokémon na sua mão.",
				de: "Nimm 2 an dieses Pokémon angelegte Fire-Energien auf deine Hand."
			},
			damage: 160,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Massive Heat Wave GX",
				fr: "Vague de Chaleur Massive GX",
				es: "Onda Ígnea Masiva GX",
				it: "Ondata Rovente GX",
				pt: "Mormaço Brutal GX",
				de: "Massive Hitzewelle GX"
			},
			effect: {
				en: "Discard an Energy from each of your opponent’s Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Défaussez une Énergie de chacun des Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Descarta 1 Energía de cada uno de los Pokémon de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Scarta un’Energia assegnata a ciascuno dei Pokémon del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Descarte 1 Energia de cada um dos Pokémon do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege 1 Energie von jedem Pokémon deines Gegners auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
