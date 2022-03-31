import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Ludicolo",
		fr: "Ludicolo",
		es: "Ludicolo",
		it: "Ludicolo",
		pt: "Ludicolo",
		de: "Kappalores"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		272,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Lombre",
		fr: "Lombre",
		es: "Lombre",
		it: "Lombre",
		pt: "Lombre",
		de: "Lombrero"
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Régénération α",
				en: "α Recovery",
				es: "{title}:",
				it: "{title}:",
				pt: "{title}:",
				de: "{title}:"
			},
			effect: {
				fr: "Lorsque ce Pokémon est soigné, doublez la quantité de soins.",
				en: "When this Pokémon is healed, double the amount healed.",
				es: "{title}: Cuando este Pokémon sea curado, dobla la cantidad curada.",
				it: "{title}: Quando curi questo Pokémon, raddoppia la quantità di danni che stai curando.",
				pt: "{title}: Quando este Pokémon for curado, dobre a quantidade curada.",
				de: "{title}: Wenn dieses Pokémon geheilt wird, verdoppele die geheilten Schadenspunkte."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Astonish",
				fr: "Étonnement",
				es: "Impresionar",
				it: "Sgomento",
				pt: "Abismar",
				de: "Erstauner"
			},
			effect: {
				en: "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into his or her deck.",
				fr: "Choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck.",
				es: "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
				it: "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
				pt: "Escolha um card aleatório da mão do seu oponente. Seu oponente revela esse card e o embaralha de volta no próprio baralho.",
				de: "Wähle 1 zufällige Karte aus der verdeckten Hand deines Gegners. Dein Gegner zeigt diese Karte und mischt sie zurück in sein Deck."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Splash Dance",
				fr: "Danse Éclaboussante",
				es: "Danza Chapoteo",
				it: "Danzaspruzzo",
				pt: "Dança Borrifante",
				de: "Spritztanz"
			},
			effect: {
				en: "During your next turn, this Pokémon's Splash Dance attack does 60 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l'attaque Danse Éclaboussante de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, el ataque Danza Chapoteo de este Pokémon hace 60 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, l'attacco Danzaspruzzo di questo Pokémon infligge 60 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Durante sua próxima vez de jogar, o ataque Dança Borrifante deste Pokémon causará 60 de danos adicionais (antes da aplicação de Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges fügt die Attacke Spritztanz dieses Pokémon 60 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
