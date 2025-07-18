import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Falkner's Togetic",
         ja: "フォークナーはトイッチです",
         fr: "Togetic de Falkner",
         de: "Falkner ist Togetic",
         es: "Falkner's Toget",
         it: "Falkner è togetico",
         pt: "Falkner's Tegetic",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [176],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Healing Touch",
            ja: "癒しのタッチ",
            fr: "Touche de guérison",
            de: "Heilung",
            es: "Toque curativo",
            it: "Tocco curativo",
            pt: "Toque curativo",
          },
          effect: {
            en: "Flip a coin. If heads, choose 1 of your Benched Pokemon and remove 3 damage counters from it. Then switch Falkner's Togetic with that Pokemon.",
            ja: "コインをひっくり返します。頭の場合は、ベンチ付きポケモンを1つ選択し、そこから3つのダメージカウンターを削除します。次に、そのポケモンでフォークナーをトジックに切り替えます。",
            fr: "Retourner une pièce. Si les têtes, choisissez 1 de votre Pokémon bancé et retirez-en 3 compteurs de dégâts. Ensuite, changez de Togetic de Falkner avec ce Pokémon.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, wählen Sie 1 Ihres Bankpokémons und entfernen Sie 3 Schadenszähler daraus. Dann wechseln Sie Falkners Togetic mit diesem Pokémon.",
            es: "Voltea una moneda. Si se dirige, elija 1 de su Pokémon de banca y quite 3 contadores de daño. Luego cambie de la palanca de Falkner con ese Pokémon.",
            it: "Capovolgi una moneta. Se le teste, scegli 1 del tuo Pokemon in panchina e rimuovi 3 contatori di danno da esso. Quindi cambia Togetic di Falkner con quel Pokemon.",
            pt: "Vire uma moeda. Se as cabeças, escolha 1 do seu Pokémon em banco e remova 3 contadores de danos. Em seguida, mude o Tegetic de Falkner com esse Pokémon.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
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
            en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Falkner's Togetic during your opponent's next turn.",
            ja: "コインをひっくり返します。頭の場合は、対戦相手の次のターン中にフォークナーのTogeticに対して行われたダメージを含む攻撃のすべての影響を防ぎます。",
            fr: "Retourner une pièce. Si les têtes, empêchent tous les effets d'une attaque, y compris les dégâts, causés à Togetic de Falkner lors du prochain tour de votre adversaire.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, verhindern Sie alle Auswirkungen eines Angriffs, einschließlich Schäden, die an Falkners Togetic während der nächsten Kurve Ihres Gegners durchgeführt werden.",
            es: "Voltea una moneda. Si las cabezas, evitan todos los efectos de un ataque, incluido el daño, se realizan a la togética de Falkner durante el próximo turno de tu oponente.",
            it: "Capovolgi una moneta. Se le teste, impediscono tutti gli effetti di un attacco, incluso il danno, fatto al tagetico di Falkner durante il prossimo turno dell'avversario.",
            pt: "Vire uma moeda. Se as cabeças, impedem todos os efeitos de um ataque, incluindo danos, causados ao Tocetic de Falkner durante o próximo turno do seu oponente.",
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
