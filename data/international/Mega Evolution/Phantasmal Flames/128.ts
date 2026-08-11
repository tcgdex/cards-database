import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Lopunny ex",
		'fr-fr': "Méga-Lockpin-ex",
		'es-es': "Mega-Lopunny ex",
		'es-mx': "Mega-Lopunny ex",
		'de-de': "Mega-Schlapor-ex",
		'it-it': "Mega Lopunny-ex",
		'pt-br': "Mega Lopunny ex"
	},
	evolveFrom: {
		'en-us': "Buneary",
		'de-de': "Haspiror",
		'es-es': "Buneary",
		'es-mx': "Buneary",
		'fr-fr': "Laporeille",
		'it-it': "Buneary",
		'pt-br': "Buneary",
	},

	rarity: "Special illustration rare",
	category: "Pokemon",

	dexId: [428],
	hp: 330,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Gale Thrust",
			'fr-fr': "Coup d'Bourrasque",
			'es-es': "Impulso Vendaval",
			'es-mx': "Impulso Vendaval",
			'de-de': "Orkanstoß",
			'it-it': "Raffica di Stoccate",
			'pt-br': "Propulsão de Tempestade"
		},

		effect: {
			'en-us': "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 170 more damage.",
			'fr-fr': "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 170 dégâts supplémentaires.",
			'es-es': "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque hace 170 puntos de daño más.",
			'es-mx': "Si este Pokémon se movió de tu Banca al Puesto Activo durante este turno, este ataque hace 170 puntos de daño más.",
			'de-de': "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, fügt diese Attacke 170 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, questo attacco infligge 170 danni in più.",
			'pt-br': "Se este Pokémon foi movido do seu Banco para o Campo Ativo neste turno, este ataque causará 170 pontos de dano a mais."
		},

		damage: "60+"
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Spiky Hopper",
			'fr-fr': "Bond Piquant",
			'es-es': "Saltapúas",
			'es-mx': "Salto Punzante",
			'de-de': "Stachelhüpfer",
			'it-it': "Balzo Aguzzo",
			'pt-br': "Saltar Farpas"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'es-mx': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	illustrator: "Kinu Nishimura",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 857703,
				tcgplayer: 662190,
				cardtrader: 356914
			}
		},
	],
}

export default card
