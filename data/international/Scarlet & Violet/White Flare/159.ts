import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [647],
	set: Set,

	name: {
		'en-us': "Keldeo ex",
		'fr-fr': "Keldeo-ex",
		'de-de': "Keldeo-ex",
		'it-it': "Keldeo-ex",
		'pt-br': "Keldeo ex",
		'es-es': "Keldeo ex",
		'es-mx': "Keldeo ex"
	},

	suffix: "ex",
	illustrator: "N-DESIGN Inc.",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Gale Thrust",
			'fr-fr': "Coup d'Bourrasque",
			'de-de': "Orkanstoß",
			'it-it': "Raffica di Stoccate",
			'pt-br': "Propulsão de Tempestade",
			'es-es': "Impulso Vendaval",
			'es-mx': "Impulso Vendaval"
		},

		effect: {
			'en-us': "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 90 more damage.",
			'fr-fr': "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			'de-de': "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, questo attacco infligge 90 danni in più.",
			'pt-br': "Se este Pokémon foi movido do seu Banco para o Campo Ativo neste turno, este ataque causará 90 pontos de dano a mais.",
			'es-es': "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque hace 90 puntos de daño más.",
			'es-mx': "Si este Pokémon se movió de tu Banca al Puesto Activo en este turno, este ataque hace 90 puntos de daño más."
		},

		damage: "30+"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Sonic Edge",
			'fr-fr': "Tranchant Sonique",
			'de-de': "Schallkante",
			'it-it': "Muro del Suono",
			'pt-br': "Gume Sônico",
			'es-es': "Tajo Sónico",
			'es-mx': "Filo Sónico"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'es-mx': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 836198,
			tcgplayer: 642276
		}
	},
],
}

export default card
