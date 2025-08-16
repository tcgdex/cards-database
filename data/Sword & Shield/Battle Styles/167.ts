import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [892],
	set: Set,

	name: {
		en: "Single Strike Urshifu VMAX",
		fr: "Shifours Poing Final VMAX",
		es: "Urshifu Golpe Brusco VMAX",
		it: "Urshifu Singolcolpo VMAX",
		pt: "Urshifu Golpe Decisivo VMAX",
		de: "Fokussierter-Angriff-Wulaosu VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Beatdown",
			fr: "Dérouillée",
			es: "Derrumbar",
			it: "Batosta",
			pt: "Abater",
			de: "Niederprügler"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			en: "G-Max One Blow",
			fr: "Coup Final G-Max",
			es: "Gigagolpe Brusco",
			it: "Gigacolpo Unico",
			pt: "Golpe Único G-Max",
			de: "Giga-Einzelschlag"
		},

		damage: 270,

		effect: {
			en: "Discard all Energy from this Pokémon. This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Défaussez toute l'Énergie de ce Pokémon. Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			es: "Descarta todas las Energías de este Pokémon. El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			it: "Scarta tutte le Energie da questo Pokémon. I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "Descarte todas as Energias deste Pokémon. O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel. Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		cost: ["Fighting", "Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",
	illustrator: "PLANETA Tsuji",

	evolveFrom: {
		en: "Single Strike Urshifu V",
		fr: "Shifours Poing Final-V",
		es: "Urshifu Golpe Brusco V",
		it: "Urshifu Singolcolpo-V",
		pt: "Urshifu Golpe Decisivo V",
		de: "Fokussierter-Angriff-Wulaosu-V"
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 527655,
		tcgplayer: 234086
	}
}

export default card
