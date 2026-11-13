import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Thundurus",
		fr: "Fulguris",
		de: "Voltolos",
		es: "Thundurus",
		it: "Thundurus",
		pt: "Thundurus",
		'es-mx': "Thundurus"
	},

	illustrator: "Takumi Wada",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Incarnate Solidarity",
			fr: "Solidarité d'Avatar",
			de: "Inkarnationssolidarität",
			es: "Avatar Solidario",
			it: "Incarnazione Solidale",
			pt: "Solidariedade Materializada",
			'es-mx': "Solidaridad Encarnada"
		},

		effect: {
			en: "If you have Tornadus, Thundurus, Landorus, and Enamorus in play, ignore all Colorless Energy in the costs of attacks used by this Pokémon.",
			fr: "Si vous avez Boréas, Fulguris, Démétéros et Amovénus en jeu, ignorez toutes les Énergies Colorless dans le coût des attaques utilisées par ce Pokémon.",
			de: "Wenn du Boreos, Voltolos, Demeteros und Cupidos im Spiel hast, ignoriere alle Colorless-Energien in den Kosten der von diesem Pokémon eingesetzten Attacken.",
			es: "Si tienes a Tornadus, Thundurus, Landorus y Enamorus en juego, ignora todas las Energías Colorless en los costes de los ataques usados por este Pokémon.",
			it: "Se hai Tornadus, Thundurus, Landorus ed Enamorus in gioco, ignora tutte le Energie Colorless necessarie per gli attacchi usati da questo Pokémon.",
			pt: "Se você tiver Tornadus, Thundurus, Landorus e Enamorus em jogo, ignore todas as Energias Colorless nos custos dos ataques usados por este Pokémon.",
			'es-mx': "Si tienes Tornadus, Thundurus, Landorus y Enamorus en juego, ignora todas las Energías Colorless en los costos de los ataques usados por este Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Thunderous Edge",
			fr: "Avantage Foudroyant",
			de: "Donnerkante",
			es: "Filo Atronador",
			it: "Lama Tonante",
			pt: "Gume Trovejante",
			'es-mx': "Filo Atronador"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'es-mx': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival."
		},

		damage: 90,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 726524,
		cardmarket: 918852
	}
}

export default card