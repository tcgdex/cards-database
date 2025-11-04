import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [593],
	set: Set,

	name: {
		en: "Jellicent ex",
		fr: "Moyade-ex",
		de: "Apoquallyp-ex",
		it: "Jellicent-ex",
		pt: "Jellicent ex",
		es: "Jellicent ex",
		'es-mx': "Jellicent ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Oceanic Curse",
			fr: "Malédiction Océanique",
			de: "Meeresfluch",
			it: "Maledizione Oceanica",
			pt: "Maldição Oceânica",
			es: "Maldición Oceánica",
			'es-mx': "Maldición Oceánica"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, your opponent can't play any Item cards or Pokémon Tool cards from their hand.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de cartes Objet ou de cartes Outil Pokémon de sa main.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, kann dein Gegner keine Itemkarten oder Pokémon-Ausrüstungen aus seiner Hand spielen.",
			it: "Fintanto che questo Pokémon è in posizione attiva, il tuo avversario non può giocare le carte Strumento o le carte Oggetto Pokémon che ha in mano.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, seu oponente não poderá jogar nenhuma carta de Item ou carta de Ferramenta Pokémon da mão dele.",
			es: "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ninguna carta de Objeto ni de Herramienta Pokémon de su mano.",
			'es-mx': "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ninguna carta de Objeto ni de Herramienta Pokémon de su mano."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Power Press",
			fr: "Étau Puissant",
			de: "Powerdruck",
			it: "Vigorstretta",
			pt: "Compressão Poderosa",
			es: "Constricción Poderosa",
			'es-mx': "Prensa Poderosa"
		},

		effect: {
			en: "If this Pokémon has at least 2 extra Energy attached (in addition to this attack's cost), this attack does 80 more damage.",
			fr: "Si au moins 2 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 80 dégâts supplémentaires.",
			de: "Wenn an dieses Pokémon mindestens 2 extra Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 80 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon ha almeno due Energie extra assegnate, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 80 danni in più.",
			pt: "Se este Pokémon tiver pelo menos 2 Energias adicionais ligadas a ele (além do custo deste ataque), este ataque causará 80 pontos de dano a mais.",
			es: "Si este Pokémon tiene por lo menos 2 Energías adicionales unidas (además de las del coste de este ataque), este ataque hace 80 puntos de daño más.",
			'es-mx': "Si este Pokémon tiene al menos 2 Energías adicionales unidas (además de las del costo de este ataque), este ataque hace 80 puntos de daño más."
		},

		damage: "80+"
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836214
	}
}

export default card