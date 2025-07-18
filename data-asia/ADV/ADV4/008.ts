import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Bellossom",
         ja: "Bellossom",
         fr: "Clocher",
         de: "Bellossom",
         es: "Brillo",
         it: "Belssom",
         pt: "Bellossom",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [182],
      hp: 100,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Heal Dance",
            ja: "ダンスを癒します",
            fr: "Guérir la danse",
            de: "Tanz heilen",
            es: "Sanar la danza",
            it: "Heal Dance",
            pt: "Cura dança",
          },
          effect: {
            en: "Once during your turn (before your attack), you may remove 2 damage counters from 1 of your PokÃ©mon. You can't use more than 1 Heal Dance PokÃ©-Power each turn. This power can't be used if Bellossom is affected by a Special Condition.",
            ja: "ターン中（攻撃の前）に一度、Pokã©Monの1つから2つのダメージカウンターを削除できます。ターンごとに1つ以上のヒールダンスポカを使用することはできません。 Bellossomが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez supprimer 2 compteurs de dégâts de 1 de votre pokã © Mon. Vous ne pouvez pas utiliser plus d'un poké de danse de guérison à chaque tour. Cette puissance ne peut pas être utilisée si Bellossom est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie 2 Schadenszähler von 1 Ihrer Pokémon entfernen. Sie können nicht mehr als 1 heilen Tanzpoké-Kraft in jeder Runde verwenden. Diese Kraft kann nicht verwendet werden, wenn Bellossom von einem besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno (antes de su ataque), puede eliminar 2 contadores de daño de 1 de su Poké Mon. No se puede usar más de 1 curación de baile de danza en cada turno. Este poder no se puede usar si Billassom se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima dell'attacco), puoi rimuovere 2 contatori di danno da 1 del tuo poké mon. Non puoi usare più di 1 cure danza poké-power ogni turno. Questo potere non può essere usato se il bellossom è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode remover 2 contadores de danos de 1 do seu Poké MON. Você não pode usar mais de 1 cura de dança Poké-Power a cada turno. Esse poder não pode ser usado se Bellossom for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Miracle Powder",
            ja: "ミラクルパウダー",
            fr: "Poudre miracle",
            de: "Wunderpulver",
            es: "Polacol en polvo",
            it: "Polvere miracolosa",
            pt: "Milagre em pó",
          },
          effect: {
            en: "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokemon is now affected by that Special Condition.",
            ja: "コインをひっくり返します。頭の場合は、1つの特別な条件を選択します。防御ポケモンは現在、その特別な状態の影響を受けています。",
            fr: "Retourner une pièce. Si les têtes, choisissez 1 état spécial. Le Pokémon en défense est désormais affecté par cette condition spéciale.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, wählen Sie 1 besondere Bedingung. Das verteidigende Pokémon ist jetzt von dieser besonderen Erkrankung betroffen.",
            es: "Voltea una moneda. Si se dirige, elija 1 condición especial. El Pokémon defensor ahora se ve afectado por esa condición especial.",
            it: "Capovolgi una moneta. Se le teste, scegli 1 condizione speciale. Il Pokemon in carica è ora influenzato da quella condizione speciale.",
            pt: "Vire uma moeda. Se as cabeças, escolha 1 condição especial. O Pokémon atual agora é afetado por essa condição especial.",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Solarbeam",
            ja: "SolarBeam",
            fr: "Solaire",
            de: "Solarbeam",
            es: "Rayo solar",
            it: "Solarbeam",
            pt: "SolarBeam",
          },
          damage: 50,
        },
      ],

      retreat: 2,

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
