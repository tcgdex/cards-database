import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Lopunny ex",
		fr: "Méga-Lockpin-ex",
		es: "Mega-Lopunny ex",
		'es-mx': "Mega-Lopunny ex",
		de: "Mega-Schlapor-ex",
		it: "Mega Lopunny-ex",
		pt: "Mega Lopunny ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",

	dexId: [428],
	hp: 330,
	types: ["Colorless"],
	stage: "Stage1",
	dexId: [428],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gale Thrust",
			fr: "Coup d'Bourrasque",
			es: "Impulso Vendaval",
			'es-mx': "Impulso Vendaval",
			de: "Orkanstoß",
			it: "Raffica di Stoccate",
			pt: "Propulsão de Tempestade"
		},

		effect: {
			en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 170 more damage.",
			fr: "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 170 dégâts supplémentaires.",
			es: "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque hace 170 puntos de daño más.",
			'es-mx': "Si este Pokémon se movió de tu Banca al Puesto Activo durante este turno, este ataque hace 170 puntos de daño más.",
			de: "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, fügt diese Attacke 170 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, questo attacco infligge 170 danni in più.",
			pt: "Se este Pokémon foi movido do seu Banco para o Campo Ativo neste turno, este ataque causará 170 pontos de dano a mais."
		},

		damage: "60+"
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Spiky Hopper",
			fr: "Bond Piquant",
			es: "Saltapúas",
			'es-mx': "Salto Punzante",
			de: "Stachelhüpfer",
			it: "Balzo Aguzzo",
			pt: "Saltar Farpas"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'es-mx': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente."
		},

		damage: 160
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857690
	}
}

export default card