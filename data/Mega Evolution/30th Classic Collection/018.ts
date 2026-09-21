import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	name: {
		en: "Gengar",
		fr: "Ectoplasma",
		de: "Gengar",
		es: "Gengar",
		it: "Gengar",
		pt: "Gengar",
		'es-mx': "Gengar"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Stage2",

	attacks: [{
		name: {
			en: "Hurl into Darkness",
			fr: "Jet dans les Ténèbres",
			de: "Finsterniswurf",
			es: "Empujón en la Oscuridad",
			it: "Spinta nell'Oscurità",
			pt: "Arremesso na Escuridão",
			'es-mx': "Envío a la Oscuridad"
		},

		effect: {
			en: "Look at your opponent's hand and choose a number of Pokémon you find there up to the number of <span class=\"energy-symbol Psychic\" title=\"Psychic\">Psychic</span> Energy attached to Gengar. Put the Pokémon you chose in the Lost Zone.",
			fr: "Regardez la main de votre adversaire et choisissez-y autant de Pokémon qu'il existe de cartes Énergie <span class=\"energy-symbol Psychic\" title=\"Psy\">Psychic</span> attachées à Ectoplasma. Placez les Pokémon que vous avez choisis dans la Zone Perdue.",
			de: "Schau dir die Handkarten deines Gegners an und wähle eine Anzahl Pokémon-Karten, die du dort findest, die höchstens der Anzahl der an Gengar angelegten <span class=\"energy-symbol Psychic\" title=\"Psycho\">Psychic</span>-Energien entspricht. Lege die gewählten Pokémon-Karten ins Nirgendwo.",
			es: "Mira la mano de tu rival y elige Pokémon que encuentres allí hasta un máximo igual al número de Energías <span class=\"energy-symbol Psychic\" title=\"Psíquico\">Psychic</span> unidas a Gengar. Pon los Pokémon que hayas elegido en la Zona Perdida.",
			it: "Guarda le carte che il tuo avversario ha in mano e scegli un numero di Pokémon pari al numero di Energie <span class=\"energy-symbol Psychic\" title=\"Psico\">Psychic</span> assegnate a Gengar. Metti i Pokémon che hai scelto nell'Area Perduta.",
			pt: "Veja a mão do seu oponente e escolha um número de Pokémon que encontrar até o número de Energias <span class=\"energy-symbol Psychic\" title=\"Psíquico\">Psychic</span> ligadas a Gengar. Coloque os Pokémon escolhidos na Zona Perdida.",
			'es-mx': "Mira la mano de tu rival y elige Pokémon que encuentres ahí hasta un máximo igual al número de Energías <span class=\"energy-symbol Psychic\" title=\"Psíquica\">Psychic</span> unidas a Gengar. Pon los Pokémon que elegiste en la Zona Perdida."
		},

		cost: ["Psychic"]
	}, {
		name: {
			en: "Cursed Drop",
			fr: "Chute maudite",
			de: "Verfluchter Fall",
			es: "Caída Maldita",
			it: "Caduta Maledetta",
			pt: "Queda Amaldiçoada",
			'es-mx': "Caída Maldita"
		},

		effect: {
			en: "Put 4 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Placez 4 marqueurs de dégât sur les Pokémon de votre adversaire, comme bon vous semble.",
			de: "Lege 4 Schadensmarken in beliebiger Verteilung auf die Pokémon deines Gegners.",
			es: "Pon 4 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			it: "Metti 4 segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
			pt: "Coloque 4 marcadores de dano nos Pokémon do seu oponente do jeito que desejar.",
			'es-mx': "Pon 4 contadores de daño en los Pokémon de tu rival de la manera que quieras."
		},

		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Colorless",
		value: "-20"
	}],

	retreat: 0,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907953,
				tcgplayer: 716198
			}
		}
	],
}

export default card