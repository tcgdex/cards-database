import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Enamorus",
		fr: "Amovénus",
		de: "Cupidos",
		es: "Enamorus",
		it: "Enamorus",
		pt: "Enamorus",
		'es-mx': "Enamorus"
	},

	illustrator: "Taira Akitsu",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
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
			en: "Rising Heart",
			fr: "Cœur Ascendant",
			de: "Couragiertes Herz",
			es: "Corazón Ascendente",
			it: "Cuore Crescente",
			pt: "Coração Ascendente",
			'es-mx': "Corazón Ascendente"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon <em>ex</em>, this attack does 100 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-<em>ex</em>, cette attaque inflige 100 dégâts supplémentaires.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-<em>ex</em> ist, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon <em>ex</em>, este ataque hace 100 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-<em>ex</em>, questo attacco infligge 100 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon <em>ex</em>, este ataque causará 100 pontos de dano a mais.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon <em>ex</em>, este ataque hace 100 puntos de daño más."
		},

		damage: "100+",
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,

	thirdParty: {
		tcgplayer: 726562,
		cardmarket: 918948
	}
}

export default card