import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Scovillain ex",
		fr: "Scovilain-ex",
		es: "Scovillain ex",
		it: "Scovillain-ex",
		pt: "Scovillain ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Chili Snapper Bind",
			fr: "Entrave Mordante Pimentée",
			es: "Atadura Picante a Rabiar",
			it: "Legamorso Piccante",
			pt: "Abocanhada Picante"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned. During your opponent's next turn, that Pokémon can't retreat.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado. Durante o próximo turno do seu oponente, aquele Pokémon não poderá recuar."
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			en: "Two-Headed Crushing",
			fr: "Écrasement Double Tête",
			es: "Demolición Bicéfala",
			it: "Distruzione Bicefala",
			pt: "Cabeça Dupla Esmagadora"
		},

		effect: {
			en: "Discard a random card from your opponent's hand. Discard the top card of your opponent's deck.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire. Défaussez la carte du dessus du deck de votre adversaire.",
			es: "Descarta 1 carta aleatoria de la mano de tu rival. Descarta la primera carta de la baraja de tu rival.",
			it: "Scarta una carta a caso dalla mano del tuo avversario. Scarta la prima carta del mazzo del tuo avversario.",
			pt: "Descarte uma carta aleatória da mão do seu oponente. Descarte a carta de cima do baralho do seu oponente."
		},

		damage: 140
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card