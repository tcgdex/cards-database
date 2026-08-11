import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [889],
	set: Set,

	name: {
		'en-us': "Zamazenta",
		'fr-fr': "Zamazenta",
		'de-de': "Zamazenta",
		'it-it': "Zamazenta",
		'es-es': "Zamazenta",
		'pt-br': "Zamazenta",
		'es-mx': "Zamazenta"
	},


	illustrator: "Takumi Wada",

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Strong Bash",
			'fr-fr': "Coup Fort",
			'de-de': "Starker Stoß",
			'it-it': "Fortecolpo",
			'es-es': "Golpetazo Firme",
			'pt-br': "Pancada Intensa",
			'es-mx': "Trancazo Fulminante"
		},

		effect: {
			'en-us': "During your opponent's next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put damage counters on the Attacking Pokémon equal to the damage done to this Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même si ce Pokémon est mis K.O.), placez des marqueurs de dégâts sur le Pokémon Attaquant équivalents aux dégâts infligés à ce Pokémon.",
			'de-de': "Wenn dieses Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege der Höhe des diesem Pokémon zugefügten Schadens entsprechend Schadensmarken auf das Angreifende Pokémon.",
			'it-it': "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, anche se viene messo KO, metti sul Pokémon attaccante dei segnalini danno pari ai danni inflitti a questo Pokémon.",
			'es-es': "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si este Pokémon queda Fuera de Combate), pon una cantidad de contadores de daño en el Pokémon Atacante equivalente al daño infligido a este Pokémon.",
			'pt-br': "Durante o próximo turno do seu oponente, se este Pokémon for danificado por um ataque (mesmo que este Pokémon seja Nocauteado), coloque contadores de dano no Pokémon Atacante equivalentes ao dano causado a este Pokémon.",
			'es-mx': "Durante el próximo turno de tu rival, si este Pokémon recibe daño de un ataque (incluso si este Pokémon queda Fuera de Combate), pon una cantidad de contadores de daño en el Pokémon Atacante equivalente al daño infligido a este Pokémon."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 826075,
				tcgplayer: 633001
			}
		},
	],
}

export default card
