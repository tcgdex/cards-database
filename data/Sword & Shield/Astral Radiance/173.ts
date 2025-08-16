import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [724],
	set: Set,

	name: {
		en: "Hisuian Decidueye V",
		fr: "Archéduc de Hisui V",
		es: "Decidueye de Hisui V",
		it: "Decidueye di Hisui V",
		pt: "Decidueye de Hisui V",
		de: "Hisui-Silvarro V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Mountain Hunt",
			fr: "Chasse Montagneuse",
			es: "Caza de Montaña",
			it: "Caccia Montana",
			pt: "Caçada Montanhosa",
			de: "Gebirgsjagd"
		},

		effect: {
			en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Close-Quarters Shooting",
			fr: "Tir de Proximité",
			es: "Disparo a Bocajarro",
			it: "Tiro Ravvicinato",
			pt: "À Queima-roupa",
			de: "Nahkampfschütze"
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
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card