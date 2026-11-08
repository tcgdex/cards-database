import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [344],
	set: Set,

	name: {
		'fr-fr': "Kaorine",
		'en-us': "Claydol",
		'es-es': "Claydol",
		'it-it': "Claydol",
		'pt-br': "Claydol",
		'de-de': "Lepumentas"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Balbuto",
		'en-us': "Baltoy",
		'es-es': "Baltoy",
		'it-it': "Baltoy",
		'pt-br': "Baltoy",
		'de-de': "Puppance"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Poupée Boum",
			'en-us': "Kaboom Doll",
			'es-es': "Muñeca Bum",
			'it-it': "Bombambola",
			'pt-br': "Boneco Explosivo",
			'de-de': "Krawumm-Puppe"
		},

		effect: {
			'fr-fr': "Placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu'à ce qu'il ne lui reste que 10 PV. Si vous avez placé au moins un marqueur de dégâts de cette façon, cette attaque inflige aussi 120 dégâts à ce Pokémon.",
			'en-us': "Put damage counters on your opponent's Active Pokémon until its remaining HP is 10. If you placed any damage counters in this way, this attack also does 120 damage to this Pokémon.",
			'es-es': "Pon contadores de daño en el Pokémon Activo de tu rival hasta que le queden 10 PS. Si has puesto algún contador de daño de esta manera, este ataque también hace 120 puntos de daño a este Pokémon.",
			'it-it': "Metti dei segnalini danno sul Pokémon attivo del tuo avversario finché i suoi PS rimanenti diventano 10. Se hai messo dei segnalini danno in questo modo, questo attacco infligge anche 120 danni a questo Pokémon.",
			'pt-br': "Coloque contadores de dano no Pokémon Ativo do seu oponente até o PS restante dele ser 10. Se você colocou algum contador de dano desta forma, este ataque também causará 120 pontos de dano a este Pokémon.",
			'de-de': "Lege so lange Schadensmarken auf das Aktive Pokémon deines Gegners, bis seine verbleibenden KP gleich 10 sind. Wenn du auf diese Weise mindestens 1 Schadensmarke platziert hast, fügt diese Attacke auch diesem Pokémon 120 Schadenspunkte zu."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'fr-fr': "Contrôleur d'Esprit",
			'en-us': "Mind Bend",
			'es-es': "Fusión Mental",
			'it-it': "Fusione Mentale",
			'pt-br': "Dobra Mentes",
			'de-de': "Gedankenverbiegung"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It appears to have been born from clay dolls made by ancient people. It uses telekinesis to float and move.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725175,
				tcgplayer: 509924,
				cardtrader: 255780
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725175,
				tcgplayer: 509924,
				cardtrader: 255780
			}
		},
	],

	illustrator: "Shigenori Negishi",

	
}

export default card
