import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Aegislash",
		fr: "Exagide",
		es: "Aegislash",
		it: "Aegislash",
		pt: "Aegislash",
		de: "Durengard"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		681,
	],

	hp: 140,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Doublade",
		fr: "Dimoclès",
		es: "Doublade",
		it: "Doublade",
		pt: "Doublade",
		de: "Duokles"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Stance Change",
				fr: "Déclic Tactique",
				es: "Cambio Táctico",
				it: "Accendilotta",
				pt: "Mudança em Posição",
				de: "Taktikwechsel"
			},
			effect: {
				en: "Once during your turn (before your attack), you may switch this Pokémon with an Aegislash in your hand. (Any cards attached to this Pokémon, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon.)",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger ce Pokémon avec un Exagide dans votre main. (Les cartes attachées à ce Pokémon, les marqueurs de dégâts, les États Spéciaux, le nombre de tours en jeu, et tous les autres effets restent sur le nouveau Pokémon.)",
				es: "Una vez durante tu turno (antes de tu ataque), puedes cambiar este Pokémon por un Aegislash de tu mano. (Todas las cartas unidas a este Pokémon, los contadores de daño, las Condiciones Especiales, los turnos de juego y todos los demás efectos permanecen en el nuevo Pokémon).",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scambiare questo Pokémon con un Aegislash nella tua mano (le carte assegnate a questo Pokémon, i segnalini danno, le condizioni speciali, il numero di turni da cui è in gioco e qualsiasi altro effetto restano sul nuovo Pokémon).",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você poderá trocar este Pokémon por um Aegislash em sua mão. (Quaisquer cards ligados a esse Pokémon, contadores de danos, Condições Especiais, vezes em jogo e quaisquer outros efeitos permanecem no novo Pokémon.)",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dieses Pokémon gegen 1 Durengard auf deiner Hand austauschen. (Alle an dieses Pokémon angelegten Karten sowie alle Schadensmarken, Speziellen Zustände, Spielzüge und alle anderen Effekte verbleiben auf dem neuen Pokémon.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Buster Swing",
				fr: "Repoussoir",
				es: "Golpe Destructor",
				it: "Colpaccio",
				pt: "Gingado",
				de: "Widerstandsbrecher"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "Il danno di questo attacco non è influenzato dalla resistenza.",
				pt: "Os danos deste ataque não são afetados por Resistência.",
				de: "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 120,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 281422,
		tcgplayer: 83462
	}
}

export default card
