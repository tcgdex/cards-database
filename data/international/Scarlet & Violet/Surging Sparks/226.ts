import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [978],
	set: Set,

	name: {
		'en-us': "Tatsugiri ex",
		'fr-fr': "Nigirigon-ex",
		'es-es': "Tatsugiri ex",
		'it-it': "Tatsugiri-ex",
		'pt-br': "Tatsugiri ex",
		'de-de': "Nigiragi-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Water"],

		name: {
			'en-us': "Surprise Pump",
			'fr-fr': "Pompe Surprise",
			'es-es': "Bomba Sorpresa",
			'it-it': "Pompa a Sorpresa",
			'pt-br': "Jato Surpresa",
			'de-de': "Überraschungspumpe"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 100
	}, {
		cost: ["Fire", "Water", "Darkness"],

		name: {
			'en-us': "Cinnabar Lure",
			'fr-fr': "Leurre Cinabre",
			'es-es': "Cebo Cinabrio",
			'it-it': "Esca di Cinabro",
			'pt-br': "Cinabre Sedutor",
			'de-de': "Zinnober-Köder"
		},

		effect: {
			'en-us': "Look at the top 10 cards of your deck. You may put any number of Pokémon you find there onto your Bench. Shuffle the other cards back into your deck.",
			'fr-fr': "Regardez les 10 cartes du dessus de votre deck. Vous pouvez placer sur votre Banc le nombre voulu de Pokémon que vous y trouvez. Mélangez les autres cartes avec votre deck.",
			'es-es': "Mira las 10 primeras cartas de tu baraja. Puedes poner cualquier cantidad de Pokémon que encuentres entre ellas en tu Banca. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			'it-it': "Guarda le prime 10 carte del tuo mazzo. Puoi mettere un numero qualsiasi di Pokémon presenti tra esse nella tua panchina. Rimischia le altre carte nel tuo mazzo.",
			'pt-br': "Olhe as 10 cartas de cima do seu baralho. Você pode colocar qualquer número de Pokémon que encontrar lá no seu Banco. Embaralhe as outras cartas de volta no seu baralho.",
			'de-de': "Schau dir die obersten 10 Karten deines Decks an. Du kannst beliebig viele Pokémon, die du dort findest, auf deine Bank legen. Mische die anderen Karten zurück in dein Deck."
		}
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794599,
				tcgplayer: 590074
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

}

export default card
