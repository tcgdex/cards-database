import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Naganadel",
		fr: "Mandrillon",
		es: "Naganadel",
		it: "Naganadel",
		pt: "Naganadel",
		de: "Agoyon"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		804,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Poipole",
		fr: "Vémini",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Charging Up",
				fr: "Recharge",
				es: "Cargando",
				it: "Caricamento",
				pt: "Carregando",
				de: "Aufladen"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a basic Energy card from your discard pile to this Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie de base de votre pile de défausse à ce Pokémon.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Básica de tu pila de descartes a este Pokémon.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare a questo Pokémon una carta Energia base dalla tua pila degli scarti.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode ligar 1 carta de Energia básica da sua pilha de descarte a este Pokémon.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Basis-Energiekarte aus deinem Ablagestapel an dieses Pokémon anlegen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Turning Point",
				fr: "Point Décisif",
				es: "Punto de Inflexión",
				it: "Punto di Svolta",
				pt: "Dar a Volta",
				de: "Wendepunkt"
			},
			effect: {
				en: "If you have exactly 3 Prize cards remaining, this attack does 80 more damage.",
				fr: "S’il vous reste exactement 3 cartes Récompense, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si te quedan exactamente 3 cartas de Premio, este ataque hace 80 puntos de daño más.",
				it: "Se hai esattamente tre carte Premio rimanenti, questo attacco infligge 80 danni in più.",
				pt: "Se você tiver exatamente 3 cartas de Prêmio restantes, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn du genau 3 verbleibende Preiskarten hast, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
