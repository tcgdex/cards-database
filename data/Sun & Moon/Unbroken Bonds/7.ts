import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Gloom",
		fr: "Ortide",
		es: "Gloom",
		it: "Gloom",
		pt: "Gloom",
		de: "Duflor"
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		44,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Oddish",
		fr: "Mystherbe",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Irresistible Aroma",
				fr: "Arôme Irrésistible",
				es: "Aroma Irresistible",
				it: "Aroma Irresistibile",
				pt: "Aroma Irresistível",
				de: "Unwiderstehlicher Duft"
			},
			effect: {
				en: "Once during your turn (before your attack), if your opponent’s Bench isn’t full, you may flip a coin. If heads, your opponent reveals their hand. Put a Basic Pokémon you find there onto their Bench.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si le Banc de votre adversaire n’est pas plein, vous pouvez lancer une pièce. Si c’est face, votre adversaire dévoile sa main. Placez sur son Banc un Pokémon de base que vous y trouvez.",
				es: "Una vez durante tu turno (antes de tu ataque), si la Banca de tu rival no está llena, puedes lanzar 1 moneda. Si sale cara, tu rival enseña las cartas de su mano. Pon 1 Pokémon Básico que encuentres entre ellas en su Banca.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se la panchina del tuo avversario non è piena, puoi lanciare una moneta. Se esce testa, il tuo avversario mostra le carte che ha in mano. Prendi un Pokémon Base presente tra quelle carte e mettilo nella sua panchina.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se o Banco do seu oponente não estiver cheio, você poderá jogar 1 moeda. Se sair cara, seu oponente revela a própria mão. Coloque 1 Pokémon Básico que encontrar lá no Banco dele(a).",
				de: "Einmal während deines Zuges (bevor du angreifst), wenn die Bank deines Gegners nicht voll ist, kannst du 1 Münze werfen. Bei Kopf zeigt dir dein Gegner seine Handkarten. Lege 1 Basis-Pokémon, das du dort findest, auf seine Bank."
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
				en: "Drool",
				fr: "Gluant",
				es: "Babeo",
				it: "Sbavare",
				pt: "Babar",
				de: "Sabbern"
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

	retreat: 2,



}

export default card
