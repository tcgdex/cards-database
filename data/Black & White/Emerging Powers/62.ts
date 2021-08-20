import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Krookodile",
		fr: "Crocorible",
		es: "Krookodile",
		it: "Krookodile",
		pt: "Krookodile",
		de: "Rabigator"
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		553,
	],
	hp: 140,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Krokorok",
		fr: "Escroco",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Black Eyes",
				fr: "Œil Noir",
				es: "Ojos Negros",
				it: "Nerosguardo",
				pt: "Olhos Negros",
				de: "Blaues Auge"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may flip a coin. If heads, discard an Energy attached to your opponent’s Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez lancer une pièce. Si c’est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon es tu Pokémon Activo, puedes lanzar una moneda. Si sale cara, descarta una Energía unida al Pokémon Activo de tu rival.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è il tuo Pokémon attivo, puoi lanciare una moneta. Se esce testa, scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Uma vez na sua vez de jogar (antes de atacar), se este Pokémon for seu Pokémon Ativo, você poderá jogar uma moeda. Se sair cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn dieses Pokémon dein Aktives Pokémon ist, 1 Münze werfen. Lege bei „Kopf“ 1 Energie, die an das Aktive Pokémon deines Gegners angelegt ist, auf dessen Ablagestapel."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Thrash",
				fr: "Mania",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage. If tails, this Pokémon does 20 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires. Si c'est pile, ce Pokémon s'inflige 20 dégâts.",
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
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
