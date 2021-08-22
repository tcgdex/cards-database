import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Lycanroc GX",
		fr: "Lougaroc GX",
		es: "Lycanroc GX",
		it: "Lycanroc GX",
		pt: "Lycanroc GX",
		de: "Wolwerock GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		745,
	],
	hp: 200,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Twilight Eyes",
				fr: "Regard du Crépuscule",
				es: "Ojos Crepúsculo",
				it: "Occhi Crepuscolari",
				pt: "Olhos Crepusculares",
				de: "Zwielichtaugen"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may discard an Energy attached to your opponent’s Active Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez défausser une Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes descartar 1 Energía unida al Pokémon Activo de tu rival.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi scartare un’Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode descartar 1 Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 1 an das Aktive Pokémon deines Gegners angelegte Energie auf seinen Ablagestapel legen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Accelerock",
				fr: "Vif Roc",
				es: "Roca Veloz",
				it: "Rocciarapida",
				pt: "Rocha Veloz",
				de: "Turbofelsen"
			},

			damage: 120,

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Splintered Shards GX",
				fr: "Roches-Lames GX",
				es: "Fragmentos Rocosos GX",
				it: "Schegge Radiali GX",
				pt: "Estilhaços Afiados GX",
				de: "Splitterregen GX"
			},
			effect: {
				en: "This attack does 30 damage for each Energy card in your opponent’s discard pile. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 30 dégâts pour chaque carte Énergie dans la pile de défausse de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 30 puntos de daño por cada carta de Energía en la pila de descartes de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 30 danni per ogni carta Energia nella pila degli scarti dal tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 30 pontos de dano para cada carta de Energia na pilha de descarte do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der Energiekarten im Ablagestapel deines Gegners zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "30×",

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
