import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Orbeetle",
		fr: "Astronelle",
		es: "Orbeetle",
		it: "Orbeetle",
		pt: "Orbeetle",
		de: "Maritellit"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		en: "Dottler",
		fr: "Coléodôme",
		es: "Dottler",
		it: "Dottler",
		pt: "Dottler",
		de: "Keradar"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Jamming Attachment",
			fr: "Accessoire Entravant",
			es: "Unión Fastidiosa",
			it: "Assegnazione di Interferenza",
			pt: "Interferência na Ligação",
			de: "Anlagestörung"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may attach up to 3 Energy cards from your opponent's discard pile to your opponent's Pokémon in any way you like.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez attacher jusqu'à 3 cartes Énergie de la pile de défausse de votre adversaire à ses Pokémon, comme il vous plaît.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes unir hasta 3 cartas de Energía de la pila de descartes de tu rival a los Pokémon de tu rival de la manera que desees.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi assegnare ai Pokémon del tuo avversario fino a tre carte Energia dalla sua pila degli scarti nel modo che preferisci.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá ligar até 3 cartas de Energia da pilha de descarte do seu oponente aos Pokémon dele(a) como desejar.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du bis zu 3 Energiekarten aus dem Ablagestapel deines Gegners beliebig an die Pokémon deines Gegners anlegen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Mysterious Wave",
			fr: "Onde Mystérieuse",
			es: "Onda Misteriosa",
			it: "Onda Enigmatica",
			pt: "Onda Oculta",
			de: "Geheimnisvolle Welle"
		},

		effect: {
			en: "This attack does 50 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 50 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 50 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 50 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	}
}

export default card
