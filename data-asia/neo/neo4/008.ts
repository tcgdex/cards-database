import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Forretress",
         ja: "暗いforretress",
         fr: "Forêt noir",
         de: "Dunkle Forressive",
         es: "Fordera oscura",
         it: "Forrettrice oscura",
         pt: "Forrerete escuro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [205],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Armor Up",
            ja: "アーマーアップ",
            fr: "Armure",
            de: "Rüstung nach oben",
            es: "Armadura",
            it: "Armatura",
            pt: "Armadura para cima",
          },
          effect: {
            en: "Until the end of your next turn, if Dark Forretress would be Knocked Out by damage from an attack, flip a coin. If heads, Dark Forretress is not Knocked Out and its remaining HP become 10 instead.",
            ja: "次のターンの終わりまで、攻撃によるダメージによって暗いfortretressがノックアウトされる場合、コインをひっくり返します。ヘッドの場合、暗いfortretressはノックアウトされず、その残りのHPは代わりに10になります。",
            fr: "Jusqu'à la fin de votre prochain tour, si Dark Forredress serait assommé par des dégâts d'une attaque, retournez une pièce. Si les têtes, Dark Forredress ne sont pas éliminés et ses HP restants deviennent 10 à la place.",
            de: "Bis zum Ende Ihrer nächsten Kurve, wenn dunkle Forressive durch Schäden durch einen Angriff ausgeschaltet wird, drehen Sie eine Münze. Wenn Köpfe, wird dunkle Forresspress nicht ausgeschlagen und seine verbleibende HP wird stattdessen zu 10.",
            es: "Hasta el final de su próximo turno, si Forretress oscuro fuera noqueada por el daño de un ataque, voltee una moneda. Si las cabezas, Dark Forretress no se eliminan y su HP restante se convierte en 10 en su lugar.",
            it: "Fino alla fine del turno successivo, se Dark Forretress fosse eliminato da un danno da un attacco, capovolgi una moneta. Se le teste, Dark Forretress non viene eliminata e i suoi HP rimanenti diventano invece 10.",
            pt: "Até o final do seu próximo turno, se a forragem escura fosse derrubada por danos causados por um ataque, virar uma moeda. Se as cabeças, a forragem escura não é nocauteada e o HP restante se tornará 10.",
          },
        },
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Explosion",
            ja: "爆発",
            fr: "Explosion",
            de: "Explosion",
            es: "Explosión",
            it: "Esplosione",
            pt: "Explosão",
          },
          effect: {
            en: "Dark Forretress does 60 damage to itself.",
            ja: "Dark Forretressは、それ自体に60のダメージを与えます。",
            fr: "Dark Forredress fait 60 dégâts à lui-même.",
            de: "Dunkle Forresress schädigt sich 60.",
            es: "Dark Forretress hace 60 daños a sí mismo.",
            it: "Dark Forretress fa 60 danni a se stesso.",
            pt: "A forreta escura causa 60 danos a si mesmo.",
          },
          damage: 60,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
