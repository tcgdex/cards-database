import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [593],
	set: Set,

	name: {
		'en-us': "Jellicent ex",
		'fr-fr': "Moyade-ex",
		'de-de': "Apoquallyp-ex",
		'it-it': "Jellicent-ex",
		'pt-br': "Jellicent ex",
		'es-es': "Jellicent ex",
		'es-mx': "Jellicent ex"
	},

	suffix: "ex",
	illustrator: "PLANETA Igarashi",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Frillish",
		'fr-fr': "Viskuse",
		'de-de': "Quabbel",
		'it-it': "Frillish",
		'pt-br': "Frillish",
		'es-es': "Frillish",
		'es-mx': "Frillish"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Oceanic Curse",
			'fr-fr': "Malédiction Océanique",
			'de-de': "Meeresfluch",
			'it-it': "Maledizione Oceanica",
			'pt-br': "Maldição Oceânica",
			'es-es': "Maldición Oceánica",
			'es-mx': "Maldición Oceánica"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, your opponent can't play any Item cards or Pokémon Tool cards from their hand.",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de cartes Objet ou de cartes Outil Pokémon de sa main.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, kann dein Gegner keine Itemkarten oder Pokémon-Ausrüstungen aus seiner Hand spielen.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, il tuo avversario non può giocare le carte Strumento o le carte Oggetto Pokémon che ha in mano.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, seu oponente não poderá jogar nenhuma carta de Item ou carta de Ferramenta Pokémon da mão dele.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ninguna carta de Objeto ni de Herramienta Pokémon de su mano.",
			'es-mx': "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ninguna carta de Objeto ni de Herramienta Pokémon de su mano."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Power Press",
			'fr-fr': "Étau Puissant",
			'de-de': "Powerdruck",
			'it-it': "Vigorstretta",
			'pt-br': "Compressão Poderosa",
			'es-es': "Constricción Poderosa",
			'es-mx': "Prensa Poderosa"
		},

		effect: {
			'en-us': "If this Pokémon has at least 2 extra Energy attached (in addition to this attack's cost), this attack does 80 more damage.",
			'fr-fr': "Si au moins 2 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 80 dégâts supplémentaires.",
			'de-de': "Wenn an dieses Pokémon mindestens 2 extra Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 80 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon ha almeno due Energie extra assegnate, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 80 danni in più.",
			'pt-br': "Se este Pokémon tiver pelo menos 2 Energias adicionais ligadas a ele (além do custo deste ataque), este ataque causará 80 pontos de dano a mais.",
			'es-es': "Si este Pokémon tiene por lo menos 2 Energías adicionales unidas (además de las del coste de este ataque), este ataque hace 80 puntos de daño más.",
			'es-mx': "Si este Pokémon tiene al menos 2 Energías adicionales unidas (además de las del costo de este ataque), este ataque hace 80 puntos de daño más."
		},

		damage: "80+"
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 835984,
				tcgplayer: 642157
			}
		},
	],
}

export default card
