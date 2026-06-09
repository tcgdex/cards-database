import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Haunter",
		fr: "Spectrum",
		es: "Haunter",
		it: "Haunter",
		de: "Alpollo",
		'pt-br': "Haunter",
		ko: "고우스트"
	},

	illustrator: "kurumitsu",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [93],
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Gastly"
	},

	description: {
		en: "It likes to lurk in the dark and tap shoulders with a gaseous hand. Its touch causes endless shuddering.",
		fr: "Il adore se tapir dans l'ombre et faire frissonner\nses proies pour l'éternité en leur touchant l'épaule.",
		es: "Le gusta acechar en la oscuridad y tocarles el\nhombro a sus víctimas con su mano gaseosa.\nEstas se quedan temblando para siempre.",
		it: "Adora stare in agguato nei luoghi bui e toccare\nle spalle delle vittime con le sue mani gassose.\nIl suo tocco causa brividi incontenibili.",
		de: "Es lauert gern im Dunkeln und tippt Leuten mit\nseiner gasförmigen Hand auf die Schulter.\nSeine Berührung erzeugt endloses Schaudern.",
		'pt-br': "Gosta de se esconder no escuro e bater nos\nombros dos outros com sua mão gasosa.\nSeu toque causa arrepios que não acabam mais.",
		ko: "어둠을 틈타 가스로 된 손을 뻗쳐\n사람의 어깨를 두드리기 좋아한다.\n그 손에 닿으면 떨림이 멈추지 않는다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Will-O-Wisp",
			fr: "Feu Follet",
			es: "Fuego Fatuo",
			it: "Fuocofatuo",
			de: "Irrlicht",
			'pt-br': "Fogo Fátuo",
			ko: "도깨비불"
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card