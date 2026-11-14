import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Liepard",
		fr: "Léopardus",
		de: "Kleoparda",
		es: "Liepard",
		it: "Liepard",
		pt: "Liepard",
		'es-mx': "Liepard"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Follow-Up Claw",
			fr: "Griffe de Relance",
			de: "Anschluss-Klaue",
			es: "Seguimiento Garra",
			it: "Proseguimento Artiglio",
			pt: "Garra em Sequência",
			'es-mx': "Garra Seguida"
		},

		effect: {
			en: "This attack does 20 damage for each damage counter on your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			de: "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 20 Schadenspunkte zu.",
			es: "Este ataque hace 20 puntos de daño por cada contador de daño en el Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 20 danni per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano para cada contador de dano no Pokémon Ativo do seu oponente.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada contador de daño en el Pokémon Activo de tu rival."
		},

		damage: "20×",
		cost: ["Darkness"]
	}, {
		name: {
			en: "Slash",
			fr: "Tranche",
			de: "Schlitzer",
			es: "Cuchillada",
			it: "Lacerazione",
			pt: "Talho",
			'es-mx': "Cuchillada"
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 728038,
				cardmarket: 918889
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 728038,
				cardmarket: 918889
			}
		}
	],
}

export default card