import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Tatsugiri ex",
		fr: "Nigirigon-ex",
		es: "Tatsugiri ex",
		it: "Tatsugiri-ex",
		pt: "Tatsugiri ex",
		de: "Nigiragi-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Water"],

		name: {
			en: "Surprise Pump",
			fr: "Pompe Surprise",
			es: "Bomba Sorpresa",
			it: "Pompa a Sorpresa",
			pt: "Jato Surpresa",
			de: "Überraschungspumpe"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 100
	}, {
		cost: ["Fire", "Water", "Darkness"],

		name: {
			en: "Cinnabar Lure",
			fr: "Leurre Cinabre",
			es: "Cebo Cinabrio",
			it: "Esca di Cinabro",
			pt: "Cinabre Sedutor",
			de: "Zinnober-Köder"
		},

		effect: {
			en: "Look at the top 10 cards of your deck. You may put any number of Pokémon you find there onto your Bench. Shuffle the other cards back into your deck.",
			fr: "Regardez les 10 cartes du dessus de votre deck. Vous pouvez placer sur votre Banc le nombre voulu de Pokémon que vous y trouvez. Mélangez les autres cartes avec votre deck.",
			es: "Mira las 10 primeras cartas de tu baraja. Puedes poner cualquier cantidad de Pokémon que encuentres entre ellas en tu Banca. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			it: "Guarda le prime 10 carte del tuo mazzo. Puoi mettere un numero qualsiasi di Pokémon presenti tra esse nella tua panchina. Rimischia le altre carte nel tuo mazzo.",
			pt: "Olhe as 10 cartas de cima do seu baralho. Você pode colocar qualquer número de Pokémon que encontrar lá no seu Banco. Embaralhe as outras cartas de volta no seu baralho.",
			de: "Schau dir die obersten 10 Karten deines Decks an. Du kannst beliebig viele Pokémon, die du dort findest, auf deine Bank legen. Mische die anderen Karten zurück in dein Deck."
		}
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 794515
	}
}

export default card
