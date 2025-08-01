import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Sylveroy Cavalier d'Effroi V",
		en: "Shadow Rider Calyrex V",
		es: "Calyrex Jinete Espectral V",
		it: "Calyrex Cavaliere Spettrale V",
		pt: "Calyrex Cavaleiro Espectral V",
		de: "Rappenreiter-Coronospa V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Brume d'Effroi",
			en: "Shadow Mist",
			es: "Neblina Espectral",
			it: "Nebbiombra",
			pt: "Névoa das Sombras",
			de: "Schattennebel"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Énergie spéciale ou Stade de sa main.",
			en: "During your opponent's next turn, they can't play any Special Energy or Stadium cards from their hand.",
			es: "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Energía Especial o de Estadio de su mano.",
			it: "Durante il prossimo turno del tuo avversario, questi non può giocare le carte Energia speciale o Stadio che ha in mano.",
			pt: "Durante o próximo turno do seu oponente, ele(a) não poderá jogar nenhuma carta de Energia Especial ou de Estádio da própria mão.",
			de: "Dein Gegner kann während seines nächsten Zuges keine Spezial-Energien oder Stadionkarten aus seiner Hand spielen."
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			fr: "Éclat Spectral",
			en: "Astral Barrage",
			es: "Orbes Espectro",
			it: "Schegge Astrali",
			pt: "Barricada Astral",
			de: "Astralfragmente"
		},

		effect: {
			fr: "Choisissez 2 des Pokémon de votre adversaire, puis placez 5 marqueurs de dégâts sur chacun d'eux.",
			en: "Choose 2 of your opponent's Pokémon and put 5 damage counters on each of them.",
			es: "Elige 2 de los Pokémon de tu rival y pon 5 contadores de daño en cada uno de ellos.",
			it: "Scegli due dei Pokémon del tuo avversario e metti cinque segnalini danno su ciascuno di essi.",
			pt: "Escolha 2 dos Pokémon do seu oponente e coloque 5 contadores de dano em cada um deles.",
			de: "Wähle 2 Pokémon deines Gegners und lege 5 Schadensmarken auf jedes von ihnen."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 567182
	}
}

export default card
