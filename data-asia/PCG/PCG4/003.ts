import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Scyther",
         ja: "スキスター",
         fr: "Scyther",
         de: "Scyther",
         es: "Esciteta",
         it: "Scither",
         pt: "Scyther",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [123],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Twin Play",
            ja: "ツインプレイ",
            fr: "Jeu de jumeaux",
            de: "Twin Play",
            es: "Juego gemelo",
            it: "Dwin Play",
            pt: "Jogo gêmeo",
          },
          effect: {
            en: "Search your deck for up to 2 in any combination of Scyther and Scyther ex and put them onto your Bench. Shuffle your deck afterward.",
            ja: "ScytherとScyther Exの任意の組み合わせで、デッキを最大2で検索し、ベンチに置きます。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck jusqu'à 2 dans n'importe quelle combinaison de Scyther et Scyther Ex et mettez-les sur votre banc. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach bis zu 2 in einer beliebigen Kombination von Scyther und Scyther Ex und legen Sie sie auf Ihre Bank. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo hasta 2 en cualquier combinación de Scyther y Scyther EX y póngalos en su banco. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo fino a 2 in qualsiasi combinazione di Scither e Scither Ex e mettili in panchina. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por até 2 em qualquer combinação de Scyther e Scyther Ex e coloque -os em seu banco. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Agility",
            ja: "敏ility性",
            fr: "Agilité",
            de: "Beweglichkeit",
            es: "Agilidad",
            it: "Agilità",
            pt: "Agilidade",
          },
          effect: {
            en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Scyther during your opponent's next turn.",
            ja: "コインをひっくり返します。頭の場合、対戦相手の次のターン中にScytherに行われたダメージを含む攻撃のすべての影響を防ぎます。",
            fr: "Retourner une pièce. Si les têtes, empêchent tous les effets d'une attaque, y compris les dégâts, faites à Scyther pendant le prochain tour de votre adversaire.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, verhindern Sie alle Auswirkungen eines Angriffs, einschließlich Schäden, die Scyther während der nächsten Kurve Ihres Gegners angerichtet haben.",
            es: "Voltea una moneda. Si las cabezas, evitan todos los efectos de un ataque, incluido el daño, hecho a Scyther durante el próximo turno de tu oponente.",
            it: "Capovolgi una moneta. Se le teste, impediscono tutti gli effetti di un attacco, incluso il danno, fatto a Scither durante il turno successivo dell'avversario.",
            pt: "Vire uma moeda. Se as cabeças, impedem todos os efeitos de um ataque, incluindo danos, causados ao Scyther durante o próximo turno do seu oponente.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
