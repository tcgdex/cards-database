import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [724],
	set: Set,

	name: {
		'fr-fr': "Archéduc de Hisui V",
		'de-de': "Hisui-Silvarro V",
		'es-es': "Decidueye de Hisui V",
		'pt-br': "Decidueye de Hisui V",
		'it-it': "Decidueye di Hisui V",
		'en-us': "Hisuian Decidueye V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Chasse Montagneuse",
			'de-de': "Gebirgsjagd",
			'es-es': "Caza de Montaña",
			'pt-br': "Caçada Montanhosa",
			'it-it': "Caccia Montana",
			'en-us': "Mountain Hunt"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'en-us': "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Tir de Proximité",
			'de-de': "Nahkampfschütze",
			'es-es': "Disparo a Bocajarro",
			'pt-br': "À Queima-roupa",
			'it-it': "Tiro Ravvicinato",
			'en-us': "Close-Quarters Shooting"
		},

		effect: {
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 650948
	}
}

export default card
