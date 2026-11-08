import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [724],
	set: Set,

	name: {
		'en-us': "Hisuian Decidueye V",
		'fr-fr': "Archéduc de Hisui V",
		'es-es': "Decidueye de Hisui V",
		'it-it': "Decidueye di Hisui V",
		'pt-br': "Decidueye de Hisui V",
		'de-de': "Hisui-Silvarro V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Mountain Hunt",
			'fr-fr': "Chasse Montagneuse",
			'es-es': "Caza de Montaña",
			'it-it': "Caccia Montana",
			'pt-br': "Caçada Montanhosa",
			'de-de': "Gebirgsjagd"
		},

		effect: {
			'en-us': "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Close-Quarters Shooting",
			'fr-fr': "Tir de Proximité",
			'es-es': "Disparo a Bocajarro",
			'it-it': "Tiro Ravvicinato",
			'pt-br': "À Queima-roupa",
			'de-de': "Nahkampfschütze"
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
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658834,
				tcgplayer: 272423
			}
		},
	],
}

export default card
