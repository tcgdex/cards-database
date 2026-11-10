import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Ariados",
		fr: "Migalos",
		de: "Ariados",
		es: "Ariados",
		it: "Ariados",
		pt: "Ariados",
		'es-mx': "Ariados"
	},

	illustrator: "UKUMO uiti",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Tormenting Poison",
			fr: "Poison Tourmente",
			de: "Peinigendes Gift",
			es: "Veneno Tormento",
			it: "Veleno Spietato",
			pt: "Veneno Atormentador",
			'es-mx': "Veneno Atormentador"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, place 4 damage counters on that Pokémon instead of 1.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 4 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 4 Schadensmarken anstelle von 1 auf jenes Pokémon.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el Chequeo Pokémon, pon 4 contadores de daño en vez de uno en ese Pokémon.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il controllo Pokémon, metti quattro segnalini danno invece di uno su quel Pokémon.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o Checape Pokémon, coloque 4 contadores de dano em vez de 1 naquele Pokémon.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado. Durante el Chequeo Pokémon, pon 4 contadores de daño en lugar de 1 en ese Pokémon."
		},

		cost: ["Darkness"]
	}, {
		name: {
			en: "Stealthy Sting",
			fr: "Dard Furtif",
			de: "Tarnstich",
			es: "Picotazo Sigiloso",
			it: "Spina Furtiva",
			pt: "Ferrão Furtivo",
			'es-mx': "Picadura Sigilosa"
		},

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base.",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Basis-Pokémon zugefügt wird.",
			es: "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon Básicos.",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base.",
			pt: "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon Básicos.",
			'es-mx': "Durante el próximo turno de tu rival, se evita todo el daño infligido por ataques de Pokémon Básicos a este Pokémon."
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 728033,
		cardmarket: 918882
	}
}

export default card