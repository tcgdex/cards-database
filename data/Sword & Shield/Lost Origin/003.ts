import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [45],
	set: Set,

	name: {
		en: "Vileplume",
		fr: "Rafflesia",
		es: "Vileplume",
		it: "Vileplume",
		pt: "Vileplume",
		de: "Giflor"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
		es: "Gloom",
		it: "Gloom",
		pt: "Gloom",
		de: "Duflor"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Mega Drain",
			fr: "Méga-Sangsue",
			es: "Megaagotar",
			it: "Megassorbimento",
			pt: "Megadreno",
			de: "Megasauger"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 50
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Allergy Storm",
			fr: "Tempête Allergène",
			es: "Tormenta Alergénica",
			it: "Allergitempesta",
			pt: "Tempestade Alérgica",
			de: "Allergiesturm"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, they can't play any Supporter cards from their hand. If tails, during your opponent's next turn, they can't play any Item cards from their hand.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Supporter de sa main. Si c'est pile, pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Objet de sa main.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, este no puede jugar ninguna carta de Partidario de su mano. Si sale cruz, durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
			it: "Lancia una moneta. Se esce testa, durante il suo prossimo turno, il tuo avversario non può giocare le carte Aiuto che ha in mano. Se esce croce, durante il suo prossimo turno, il tuo avversario non può giocare le carte Strumento che ha in mano.",
			pt: "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, ele(a) não poderá jogar nenhuma carta de Apoiador da própria mão. Se sair coroa, durante o próximo turno do seu oponente, ele(a) não poderá jogar nenhuma carta de Item da própria mão.",
			de: "Wirf 1 Münze. Bei Kopf kann dein Gegner während seines nächsten Zuges keine Unterstützerkarten aus seiner Hand spielen. Bei Zahl kann dein Gegner während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	},

	thirdParty: {
		cardmarket: 674015,
		tcgplayer: 283865
	}
}

export default card
