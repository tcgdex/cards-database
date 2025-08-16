import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [647],
	set: Set,

	name: {
		en: "Keldeo ex",
		fr: "Keldeo-ex",
		de: "Keldeo-ex",
		it: "Keldeo-ex",
		pt: "Keldeo ex",
		es: "Keldeo ex",
		'es-mx': "Keldeo ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Gale Thrust",
			fr: "Coup d'Bourrasque",
			de: "Orkanstoß",
			it: "Raffica di Stoccate",
			pt: "Propulsão de Tempestade",
			es: "Impulso Vendaval",
			'es-mx': "Impulso Vendaval"
		},

		effect: {
			en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 90 more damage.",
			fr: "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			de: "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, questo attacco infligge 90 danni in più.",
			pt: "Se este Pokémon foi movido do seu Banco para o Campo Ativo neste turno, este ataque causará 90 pontos de dano a mais.",
			es: "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque hace 90 puntos de daño más.",
			'es-mx': "Si este Pokémon se movió de tu Banca al Puesto Activo en este turno, este ataque hace 90 puntos de daño más."
		},

		damage: "30+"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Sonic Edge",
			fr: "Tranchant Sonique",
			de: "Schallkante",
			it: "Muro del Suono",
			pt: "Gume Sônico",
			es: "Tajo Sónico",
			'es-mx': "Filo Sónico"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'es-mx': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835962
	}
}

export default card