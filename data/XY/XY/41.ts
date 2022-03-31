import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Greninja",
		fr: "Amphinobi",
		es: "Greninja",
		it: "Greninja",
		pt: "Greninja",
		de: "Quajutsu"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		658,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Frogadier",
		fr: "Croâporal",
		es: "Frogadier",
		it: "Frogadier",
		pt: "Frogadier",
		de: "Amphizel"
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Water Shuriken",
				fr: "Sheauriken",
				es: "Shuriken de Agua",
				it: "Acqualame",
				pt: "Estrela Ninja de Água",
				de: "Wasser-Shuriken"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a Water Energy card from your hand. If you do, put 3 damage counters on 1 of your opponent's Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie Water de votre main. Dans ce cas, placez 3 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 carta de Energía Water de tu mano. Si lo haces, pon 3 contadores de daño en 1 de los Pokémon de tu rival.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare una carta Energia Water dalla tua mano. Se lo fai, metti tre segnalini danno su uno dei Pokémon del tuo avversario.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode descartar um card de Energia Water da sua mão. Se fizer isso, coloque 3 contadores de danos em 1 dos Pokémon do seu oponente.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Water-Energiekarte von deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, lege 3 Schadensmarken auf 1 Pokémon deines Gegners."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Mist Slash",
				fr: "Tranche-Brume",
				es: "Golpe Niebla",
				it: "Squarcianebbia",
				pt: "Golpe de Névoa",
				de: "Schleierschlitzer"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on your opponent's Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
				es: "El daño de este ataque no se ve afectado por Debilidad, Resistencia o cualquier otro efecto en el Pokémon Activo de tu rival.",
				it: "Il danno di questo attacco non è influenzato dalla debolezza, dalla resistenza o da qualsiasi altro effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "Os danos desse ataque não são afetados por Fraqueza, Resistência, ou qualquer outro efeito no Pokémon Ativo do seu oponente.",
				de: "Der Schaden dieses Angriffs wird durch Schwäche, Resistenz oder alle anderen Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
