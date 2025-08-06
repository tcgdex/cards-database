import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Archéduc de Hisui V",
		de: "Hisui-Silvarro V",
		es: "Decidueye de Hisui V",
		pt: "Decidueye de Hisui V",
		it: "Decidueye di Hisui V",
		en: "Hisuian Decidueye V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Chasse Montagneuse",
			de: "Gebirgsjagd",
			es: "Caza de Montaña",
			pt: "Caçada Montanhosa",
			it: "Caccia Montana",
			en: "Mountain Hunt"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			es: "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			it: "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			fr: "Tir de Proximité",
			de: "Nahkampfschütze",
			es: "Disparo a Bocajarro",
			pt: "À Queima-roupa",
			it: "Tiro Ravvicinato",
			en: "Close-Quarters Shooting"
		},

		effect: {
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon."
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 650948
	}
}

export default card