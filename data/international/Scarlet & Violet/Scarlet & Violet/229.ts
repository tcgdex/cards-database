import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [354],
	set: Set,

	name: {
		'en-us': "Banette ex",
		'fr-fr': "Branette-ex",
		'es-es': "Banette ex",
		'it-it': "Banette-ex",
		'pt-br': "Banette ex",
		'de-de': "Banette-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Everlasting Darkness",
			'fr-fr': "Obscurité Éternelle",
			'es-es': "Oscuridad Eterna",
			'it-it': "Oscurità Perpetua",
			'pt-br': "Escuridão Eterna",
			'de-de': "Ewige Finsternis"
		},

		effect: {
			'en-us': "During your opponent's next turn, they can't play any Item cards from their hand.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Objet de sa main.",
			'es-es': "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
			'it-it': "Durante il suo prossimo turno, il tuo avversario non può giocare le carte Strumento che ha in mano.",
			'pt-br': "Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Item da mão dele.",
			'de-de': "Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen."
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Poltergeist",
			'fr-fr': "Esprit Frappeur",
			'es-es': "Poltergeist",
			'it-it': "Poltergeist",
			'pt-br': "Poltergeist",
			'de-de': "Poltergeist"
		},

		effect: {
			'en-us': "Your opponent reveals their hand. This attack does 60 damage for each Trainer card you find there.",
			'fr-fr': "Votre adversaire montre sa main. Cette attaque inflige 60 dégâts pour chaque carte Dresseur que vous y trouvez.",
			'es-es': "Tu rival enseña las cartas de su mano. Este ataque hace 60 puntos de daño por cada carta de Entrenador que encuentres entre ellas.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano. Questo attacco infligge 60 danni per ogni carta Allenatore presente tra quelle carte.",
			'pt-br': "Seu oponente revela a mão dele. Este ataque causa 60 pontos de dano para cada carta de Treinador que encontrar lá.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten. Diese Attacke fügt für jede Trainerkarte, die du dort findest, 60 Schadenspunkte zu."
		},

		damage: "60×"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		}
	],

	suffix: "ex",
	illustrator: "PLANETA Mochizuki",

	thirdParty: {
        cardmarket: 702525,
        tcgplayer: 490087
    }
}

export default card