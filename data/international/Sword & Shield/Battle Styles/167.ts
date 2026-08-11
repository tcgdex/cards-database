import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [892],
	set: Set,

	name: {
		'en-us': "Single Strike Urshifu VMAX",
		'fr-fr': "Shifours Poing Final VMAX",
		'es-es': "Urshifu Golpe Brusco VMAX",
		'it-it': "Urshifu Singolcolpo VMAX",
		'pt-br': "Urshifu Golpe Decisivo VMAX",
		'de-de': "Fokussierter-Angriff-Wulaosu VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],

	attacks: [{
		name: {
			'en-us': "Beatdown",
			'fr-fr': "Dérouillée",
			'es-es': "Derrumbar",
			'it-it': "Batosta",
			'pt-br': "Abater",
			'de-de': "Niederprügler"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "G-Max One Blow",
			'fr-fr': "Coup Final G-Max",
			'es-es': "Gigagolpe Brusco",
			'it-it': "Gigacolpo Unico",
			'pt-br': "Golpe Único G-Max",
			'de-de': "Giga-Einzelschlag"
		},

		damage: 270,

		effect: {
			'en-us': "Discard all Energy from this Pokémon. This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Défaussez toute l'Énergie de ce Pokémon. Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "Descarta todas las Energías de este Pokémon. El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "Scarta tutte le Energie da questo Pokémon. I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "Descarte todas as Energias deste Pokémon. O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel. Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		cost: ["Fighting", "Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,


	stage: "VMAX",
	illustrator: "PLANETA Tsuji",

	evolveFrom: {
		'en-us': "Single Strike Urshifu V",
		'fr-fr': "Shifours Poing Final-V",
		'es-es': "Urshifu Golpe Brusco V",
		'it-it': "Urshifu Singolcolpo-V",
		'pt-br': "Urshifu Golpe Decisivo V",
		'de-de': "Fokussierter-Angriff-Wulaosu-V"
	},

	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 546626,
				tcgplayer: 234086
			}
		},
	],
}

export default card
