import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Espeon (Delta Species)",
         ja: "エスペオン（デルタ種）",
         fr: "Espeon (espèces delta)",
         de: "Espeon (Delta -Arten)",
         es: "Espeon (especie delta)",
         it: "Espeon (Delta Species)",
         pt: "Espeon (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [196],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Delta Heal",
            ja: "デルタヒール",
            fr: "Delta Heal",
            de: "Delta heilen",
            es: "Delta Heal",
            it: "Delta Heal",
            pt: "Delta Heal",
          },
          effect: {
            en: "Once during your turn (before your attack), you may remove 1 damage counter from each of your PokÃ©mon that has ÅÂ¥ on its card. You can't use more than 1 Delta Heal PokÃ©-Power each turn. This power can't be used if Espeon is affected by a Special Condition.",
            ja: "ターン中（攻撃の前）になったら、カードにÅ¥を持っているPokã©Monから1つのダメージカウンターを削除できます。ターンごとに1つ以上のDelta HealPokã©-Powerを使用することはできません。 Espeonが特別な状態の影響を受けた場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez supprimer 1 compteur de dégâts de chacun de votre poké mon qui a Å ¥ sur sa carte. Vous ne pouvez pas utiliser plus de 1 delta Heal Pokã © -Power à chaque tour. Ce pouvoir ne peut pas être utilisé si Espeon est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Kurses (vor Ihrem Angriff) sind, können Sie 1 Schadenschalter von jedem Ihrer Poké Mons entfernen, der auf seiner Karte ¥ ¥ hat. Sie können nicht mehr als 1 Delta Heal Poké-Kraft in jeder Runde verwenden. Diese Leistung kann nicht angewendet werden, wenn Espeon von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede eliminar 1 contador de daño de cada uno de sus Poké Mon que tiene Å â ¥ en su tarjeta. No puede usar más de 1 delta curación de la potencia cada turno. Este poder no se puede usar si Espeon se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima dell'attacco), puoi rimuovere 1 contatore di danni da ciascuno dei tuoi poké che ha Å â ¥ sulla sua carta. Non è possibile utilizzare più di 1 delta cure Poké-power ogni turno. Questo potere non può essere utilizzato se Espeon è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode remover 1 contador de danos de cada um dos seus Poké, que possui Å ¥ em seu cartão. Você não pode usar mais de 1 Delta Heal Poké-Power a cada turno. Esse poder não pode ser usado se Espeon for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Metal"],
          name: {
            en: "Psyshock",
            ja: "PsyShock",
            fr: "Psychock",
            de: "Psyshock",
            es: "Psíquico",
            it: "Psyshock",
            pt: "Psyshock",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
