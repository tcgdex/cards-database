import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Koffing",
		fr: "Smogo",
		es: "Koffing",
		it: "Koffing",
		pt: "Koffing",
		de: "Smogon"
	},
	illustrator: "HYOGONOSUKE",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		109,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Blow-Away Bomb",
				fr: "Bombe Repoussante",
				es: "Bomba Arrasadora",
				it: "Bomba Volavia",
				pt: "Bomba Devastadora",
				de: "Wegpusten"
			},
			effect: {
				en: "Once during your turn, when you discard this Pokémon with the effect of Roxie, you may put 1 damage counter on each of your opponent’s Pokémon. (Place damage counters after the effect of Roxie.)",
				fr: "Une seule fois pendant votre tour, lorsque vous défaussez ce Pokémon du fait de l’effet de la carte Strykna, vous pouvez placer un marqueur de dégâts sur chacun des Pokémon de votre adversaire. (Placez les marqueurs de dégâts après l’effet de Strykna.)",
				es: "Una vez durante tu turno, cuando descartes este Pokémon con el efecto de Hiedra, puedes poner 1 contador de daño en cada uno de los Pokémon de tu rival. (Coloca los contadores de daño después del efecto de Hiedra).",
				it: "Una sola volta durante il tuo turno, quando scarti questo Pokémon per effetto di Velia, puoi mettere un segnalino danno su ciascuno dei Pokémon del tuo avversario. Metti i segnalini danno dopo l’effetto di Velia.",
				pt: "Uma vez durante a sua vez de jogar, quando você descartar este Pokémon com o efeito de Roxie, você pode colocar 1 contador de dano em cada um dos Pokémon do seu oponente (coloque os contadores de dano após o efeito de Roxie).",
				de: "Einmal während deines Zuges, wenn du dieses Pokémon mit dem Effekt von Mica auf deinen Ablagestapel legst, kannst du 1 Schadensmarke auf jedes Pokémon deines Gegners legen. (Platziere die Schadensmarken nach dem Effekt von Mica.)"
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poison Gas",
				fr: "Gaz Toxik",
				es: "Gas Venenoso",
				it: "Velenogas",
				pt: "Gás Venenoso",
				de: "Giftwolke"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 10,

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
