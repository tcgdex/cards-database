import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Illumise",
         ja: "照らされます",
         fr: "Illuminer",
         de: "Beleuchtet",
         es: "Iluminar",
         it: "Illumini",
         pt: "Iluminar",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [314],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Beacon Protection",
            ja: "ビーコン保護",
            fr: "Protection contre la balise",
            de: "Beacon -Schutz",
            es: "Protección contra la baliza",
            it: "Protezione del faro",
            pt: "Proteção do farol",
          },
          effect: {
            en: "As long as you have Volbeat in play, prevent all effects, including damage, done to Illumise by attacks from your opponent's PokÃ©mon that has Dark in its name.",
            ja: "Volbeatがプレイされている限り、その名前が暗くなっている相手のPokã©Monからの攻撃によって照らされるために、損傷を含むすべての効果を防ぎます。",
            fr: "Tant que vous avez Volbeat en jeu, empêchez tous les effets, y compris les dégâts, faits pour illuminer par des attaques de la poké de votre adversaire qui a de l'obscurité en son nom.",
            de: "Solange Sie Volbeat im Spiel haben, verhindern Sie alle Effekte, einschließlich Schäden, die durch Angriffe aus dem Poké -Mong Ihres Gegners zu beleuchten sind, der in seinem Namen dunkel ist.",
            es: "Mientras tenga Volbeat en juego, evite que todos los efectos, incluido el daño, sean iluminados por los ataques del Poké Mon de su oponente que tiene oscuro en su nombre.",
            it: "Finché hai in gioco Volbeat, impedisci tutti gli effetti, inclusi i danni, per illuminarsi dagli attacchi del poké del tuo avversario che ha buio nel suo nome.",
            pt: "Enquanto você tiver o Volbeat em jogo, evite todos os efeitos, incluindo danos, causados a iluminar por ataques do Poké -Mon do seu oponente que tem escuro em seu nome.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Call for Family",
            ja: "家族を呼びます",
            fr: "Appel à la famille",
            de: "Rufen Sie nach Familie",
            es: "Llamar a la familia",
            it: "Chiama per la famiglia",
            pt: "Ligue para a família",
          },
          effect: {
            en: "Search your deck for a Basic Pokemon and put it onto your Bench.  Shuffle your deck afterward.",
            ja: "デッキを検索して、基本的なポケモンを探して、ベンチに置きます。  その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck pour un Pokémon de base et mettez-le sur votre banc.  Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einem einfachen Pokémon und legen Sie es auf Ihre Bank.  Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo un Pokémon básico y colóquelo en su banco.  Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo un Pokemon di base e mettilo in panchina.  Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por um Pokémon básico e coloque -o em seu banco.  Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Strange Rasping",
            ja: "奇妙なラスピン",
            fr: "Strange râpe",
            de: "Seltsames Rassing",
            es: "Rasos extraños",
            it: "Strano rasping",
            pt: "Estranho raspando",
          },
          effect: {
            en: "If the Defending Pokemon is an Evolved Pokemon, the Defending Pokemon is now Confused.",
            ja: "防御ポケモンが進化したポケモンである場合、防御ポケモンは混乱しています。",
            fr: "Si le Pokémon en défense est un Pokémon évolué, le Pokémon en défense est maintenant confus.",
            de: "Wenn das verteidigende Pokémon ein entwickeltes Pokémon ist, ist das verteidigende Pokémon jetzt verwirrt.",
            es: "Si el Pokémon defensor es un Pokémon evolucionado, el Pokémon defensor ahora está confundido.",
            it: "Se il Pokemon in carica è un Pokemon evoluto, il Pokemon in difesa è ora confuso.",
            pt: "Se o Pokémon atual for um Pokemon evoluído, o Pokémon atual agora está confuso.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
