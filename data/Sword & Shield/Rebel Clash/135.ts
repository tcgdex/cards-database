import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Aegislash",
		fr: "Exagide",
		es: "Aegislash",
		it: "Aegislash",
		pt: "Aegislash",
		de: "Durengard"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Doublade",
		fr: "Dimoclès"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Big Shield",
				fr: "Bouclier Imposant",
				es: "Gran Escudo",
				it: "Granscudo",
				pt: "Grande Escudo",
				de: "Großer Schild"
			},
			effect: {
				en: "All of your Pokémon take 30 less damage from your opponent’s attacks (after applying Weakness and Resistance). You can’t apply more than 1 Big Shield Ability at a time.",
				fr: "Tous vos Pokémon subissent 30 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance). Vous ne pouvez utiliser qu’un talent Bouclier Imposant à la fois.",
				es: "Los ataques de tu rival hacen 30 puntos de daño menos a todos tus Pokémon (después de aplicar Debilidad y Resistencia). No puedes aplicar más de 1 habilidad Gran Escudo a la vez.",
				it: "I tuoi Pokémon subiscono 30 danni in meno dagli attacchi del tuo avversario, dopo aver applicato debolezza e resistenza. Non puoi applicare più di un’abilità Granscudo alla volta.",
				pt: "Todos os seus Pokémon recebem 30 pontos de dano a menos dos ataques do seu oponente (depois de aplicar Fraqueza e Resistência). Você não pode usar mais de 1 Habilidade Grande Escudo por vez.",
				de: "Allen deinen Pokémon werden durch Attacken deines Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden). Du kannst immer nur jeweils 1 Fähigkeit Großer Schild einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Power Edge",
				fr: "Lame Puissante",
				es: "Filo Poderoso",
				it: "Colpotente",
				pt: "Gume Poderoso",
				de: "Kraftklinge"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 3,
	hp: 140,
	types: ["Metal"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
