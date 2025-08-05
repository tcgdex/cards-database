import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Butterfree - 066/128",
         ja: "蝶-066/128",
         fr: "Butterfree - 066/128",
         de: "Butterfree - 066/128",
         es: "Butterfree - 066/128",
         it: "Butterfree - 066/128",
         pt: "Butterfree - 066/128",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [12],
      hp: 80,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Miraculous Powder",
            ja: "奇跡的なパウダー",
            fr: "Poudre miraculeuse",
            de: "Wundersames Pulver",
            es: "Polvo milagroso",
            it: "Polvere miracolosa",
            pt: "Pó milagroso",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may remove all Special Conditions from your Active Pokmon. This power can't be used if Butterfree is affected by a Special Condition.",
            ja: "順番<em>（攻撃の前）</em>中に、アクティブなポケモンからすべての特別な条件を削除することができます。蝶が特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez supprimer toutes les conditions spéciales de votre Pokémon actif. Cette puissance ne peut pas être utilisée si le papillon est affecté par une condition spéciale.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em> können Sie alle speziellen Bedingungen von Ihrem aktiven Pokémon entfernen. Diese Kraft kann nicht verwendet werden, wenn Butterfree von einem besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede eliminar todas las condiciones especiales de su Pokémon activo. Esta potencia no se puede usar si ButterFree se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima dell'attacco) </em>, puoi rimuovere tutte le condizioni speciali dal tuo Pokemon attivo. Questa potenza non può essere utilizzata se Butterfree è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode remover todas as condições especiais do seu Pokémon ativo. Essa potência não pode ser usada se o sem -borboleta for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Spiral Drain",
            ja: "スパイラルドレイン",
            fr: "Spiritin en spirale",
            de: "Spiralabfluss",
            es: "Desagüe",
            it: "Scarico a spirale",
            pt: "Dreno em espiral",
          },
          effect: {
            en: "Flip a coin. If heads, remove 2 damage counters from Butterfree.",
            ja: "コインをひっくり返します。頭の場合は、蝶から2つのダメージカウンターを取り外します。",
            fr: "Retourner une pièce. Si les têtes, retirez 2 compteurs de dégâts de Butterfree.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, entfernen Sie 2 Schadenszähler von Butterfree.",
            es: "Voltea una moneda. Si se dirige, retire 2 contadores de daño de Butterfree.",
            it: "Capovolgi una moneta. Se le teste, rimuovere 2 contatori di danno da Butterfree.",
            pt: "Vire uma moeda. Se as cabeças, remova 2 contadores de danos da sem -borboleta.",
          },
          damage: 40,
        },
      ],


      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
